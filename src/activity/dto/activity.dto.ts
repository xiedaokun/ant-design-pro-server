import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserRefDto {
  @ApiProperty({ example: '曲丽丽' })
  name: string;

  @ApiProperty({
    example:
      'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  })
  avatar: string;
}

export class LinkRefDto {
  @ApiProperty({ example: '高逼格设计天团' })
  name: string;

  @ApiProperty({ example: 'http://github.com/' })
  link: string;
}

export class ActivityDto {
  @ApiProperty({ example: 'trend-1' })
  id: string;

  @ApiProperty({ example: '2026-01-16T10:04:33.225Z' })
  updatedAt: string;

  @ApiProperty({ type: UserRefDto })
  user: UserRefDto;

  @ApiPropertyOptional({ type: LinkRefDto })
  group?: LinkRefDto;

  @ApiPropertyOptional({ type: LinkRefDto })
  project?: LinkRefDto;

  @ApiPropertyOptional({ type: LinkRefDto })
  comment?: LinkRefDto;

  @ApiProperty({ example: '在 @{group} 新建项目 @{project}' })
  template: string;
}

export class ActivitiesResponseDto {
  @ApiProperty({ type: [ActivityDto] })
  data: ActivityDto[];
}
