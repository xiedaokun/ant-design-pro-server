/**
 * 认证控制器
 * 提供登录、登出接口
 */
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { Public } from './public.decorator';

@ApiTags('认证管理')
@Controller('api/login')
@Public() // 登录相关接口无需 token 认证
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 账号密码登录
   * POST /api/login/account
   */
  @Post('account')
  @ApiOperation({
    summary: '账号密码登录',
    description: '使用用户名和密码登录系统',
  })
  @ApiResponse({ status: 200, description: '登录结果', type: LoginResponseDto })
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }

  /**
   * 退出登录
   * POST /api/login/outLogin
   */
  @Post('outLogin')
  @ApiOperation({ summary: '退出登录', description: '退出当前登录状态' })
  logout() {
    return this.authService.logout();
  }
}
