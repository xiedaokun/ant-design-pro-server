/**
 * 用户控制器
 * 提供用户信息查询接口
 */
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { CurrentUserResponseDto } from './dto/current-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('用户管理')
@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * 获取当前登录用户信息
   * 需要携带 JWT Token
   */
  @Get('currentUser')
  @UseGuards(JwtAuthGuard) // 使用 JWT Guard 保护路由
  @ApiBearerAuth() // Swagger 文档中显示需要 Bearer Token
  @ApiOperation({
    summary: '获取当前用户',
    description: '获取当前登录用户的详细信息（需要 Token）',
  })
  @ApiResponse({
    status: 200,
    description: '当前用户信息',
    type: CurrentUserResponseDto,
  })
  @ApiResponse({ status: 401, description: '未授权（Token 无效或过期）' })
  async getCurrentUser(
    @Request()
    req: {
      user: { userId: number; username: string; authority: string };
    },
  ): Promise<CurrentUserResponseDto> {
    // 从 JWT Token 中获取用户 ID（JwtStrategy 验证后挂载到 req.user）
    const userId = String(req.user.userId);
    return this.userService.getCurrentUser(userId);
  }
}
