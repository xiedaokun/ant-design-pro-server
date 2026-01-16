/**
 * 认证服务
 * 处理用户登录、登出逻辑
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { LoginDto, LoginResponseDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  /**
   * 用户登录
   * @param loginDto 登录参数（用户名、密码、登录类型）
   * @returns 登录结果（状态、权限、Token）
   */
  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { username, password, type } = loginDto;

    // 从数据库查找用户（验证用户名、密码、激活状态）
    const user = await this.userRepository.findOne({
      where: { username, password, isActive: true },
    });

    // 登录成功，生成 JWT Token
    if (user) {
      const payload = {
        sub: user.id,
        username: user.username,
        authority: user.authority,
      };
      const token = this.jwtService.sign(payload);

      return {
        status: 'ok',
        type: type || 'account',
        currentAuthority: user.authority,
        token,
      };
    }

    // 登录失败，返回游客权限
    return {
      status: 'error',
      type: type || 'account',
      currentAuthority: 'guest',
    };
  }

  /**
   * 用户登出
   * @returns 登出结果
   */
  logout(): { success: boolean } {
    return { success: true };
  }
}
