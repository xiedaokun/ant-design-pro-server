import { ApiProperty } from '@nestjs/swagger';

export class TagItemDto {
  @ApiProperty({ example: '北京市' })
  name: string;

  @ApiProperty({ example: 55 })
  value: number;

  @ApiProperty({ example: 0 })
  type: number;
}

export class TagsListDto {
  @ApiProperty({ type: [TagItemDto] })
  list: TagItemDto[];
}

export class TagsResponseDto {
  @ApiProperty({ type: TagsListDto })
  data: TagsListDto;
}
