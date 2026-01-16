import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRuleDto {
  @ApiProperty({ description: '规则名称', example: 'TradeCode 1' })
  name: string;

  @ApiPropertyOptional({ description: '是否禁用', default: false })
  disabled?: boolean;

  @ApiPropertyOptional({
    description: '链接地址',
    example: 'https://ant.design',
  })
  href?: string;

  @ApiPropertyOptional({ description: '头像地址' })
  avatar?: string;

  @ApiPropertyOptional({ description: '负责人', example: '曲丽丽' })
  owner?: string;

  @ApiPropertyOptional({ description: '描述信息', example: '这是一段描述' })
  desc?: string;

  @ApiPropertyOptional({ description: '调用次数', default: 0 })
  callNo?: number;

  @ApiPropertyOptional({ description: '状态', default: '0' })
  status?: string;

  @ApiPropertyOptional({ description: '进度', default: 0 })
  progress?: number;
}
