import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto } from './dto/login.dto';

@ApiTags('认证管理')
@Controller('api/login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('account')
  @ApiOperation({
    summary: '账号密码登录',
    description: '使用用户名和密码登录系统',
  })
  @ApiResponse({ status: 200, description: '登录结果', type: LoginResponseDto })
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }

  @Post('outLogin')
  @ApiOperation({ summary: '退出登录', description: '退出当前登录状态' })
  logout() {
    return this.authService.logout();
  }
}
