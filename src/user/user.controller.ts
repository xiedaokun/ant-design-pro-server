import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CurrentUserResponseDto } from './dto/current-user.dto';

@ApiTags('用户管理')
@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('currentUser')
  @ApiOperation({
    summary: '获取当前用户',
    description: '获取当前登录用户的详细信息',
  })
  @ApiResponse({
    status: 200,
    description: '当前用户信息',
    type: CurrentUserResponseDto,
  })
  async getCurrentUser(): Promise<CurrentUserResponseDto> {
    // 暂时使用固定的 userId，后续可以通过 JWT 或 Session 获取
    const userId = '00000001';
    return this.userService.getCurrentUser(userId);
  }
}
