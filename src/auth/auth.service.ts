import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { LoginDto, LoginResponseDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { username, password, type } = loginDto;

    // 从数据库查找用户
    const user = await this.userRepository.findOne({
      where: { username, password, isActive: true },
    });

    if (user) {
      return {
        status: 'ok',
        type: type || 'account',
        currentAuthority: user.authority,
      };
    }

    // 登录失败
    return {
      status: 'error',
      type: type || 'account',
      currentAuthority: 'guest',
    };
  }

  logout(): { success: boolean } {
    return { success: true };
  }
}
