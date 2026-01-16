import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: '用户名', example: 'admin' })
  username: string;

  @ApiProperty({ description: '密码', example: 'ant.design' })
  password: string;

  @ApiPropertyOptional({ description: '自动登录', default: false })
  autoLogin?: boolean;

  @ApiProperty({ description: '登录类型', example: 'account' })
  type: string;
}

export class LoginResponseDto {
  @ApiProperty({ description: '登录状态', example: 'ok' })
  status: string;

  @ApiProperty({ description: '登录类型', example: 'account' })
  type: string;

  @ApiProperty({ description: '当前权限', example: 'admin' })
  currentAuthority: string;

  @ApiPropertyOptional({ description: 'JWT Token' })
  token?: string;
}
