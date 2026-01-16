import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProjectNoticeDto {
  @ApiProperty({ example: 'xxx1' })
  id: string;

  @ApiProperty({ example: 'Alipay' })
  title: string;

  @ApiProperty({
    example:
      'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
  })
  logo: string;

  @ApiProperty({ example: '那是一种内在的东西，他们到达不了，也无法触及的' })
  description: string;

  @ApiProperty({ example: '2026-01-16T09:56:44.558Z' })
  updatedAt: string;

  @ApiProperty({ example: '科学搬砖组' })
  member: string;

  @ApiPropertyOptional({ example: '' })
  href?: string;

  @ApiPropertyOptional({ example: '' })
  memberLink?: string;
}

export class ProjectNoticeResponseDto {
  @ApiProperty({ type: [ProjectNoticeDto] })
  data: ProjectNoticeDto[];
}
