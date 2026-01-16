import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TagDto {
  @ApiProperty({ example: '0' })
  key: string;

  @ApiProperty({ example: '很有想法的' })
  label: string;
}

export class ProvinceDto {
  @ApiProperty({ example: '浙江省' })
  label: string;

  @ApiProperty({ example: '330000' })
  key: string;
}

export class CityDto {
  @ApiProperty({ example: '杭州市' })
  label: string;

  @ApiProperty({ example: '330100' })
  key: string;
}

export class GeographicDto {
  @ApiProperty({ type: ProvinceDto })
  province: ProvinceDto;

  @ApiProperty({ type: CityDto })
  city: CityDto;
}

export class CurrentUserDto {
  @ApiProperty({ example: 'Serati Ma' })
  name: string;

  @ApiProperty({
    example:
      'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  })
  avatar: string;

  @ApiProperty({ example: '00000001' })
  userid: string;

  @ApiPropertyOptional({ example: 'antdesign@alipay.com' })
  email?: string;

  @ApiPropertyOptional({ example: '海纳百川，有容乃大' })
  signature?: string;

  @ApiPropertyOptional({ example: '交互专家' })
  title?: string;

  @ApiPropertyOptional({
    example: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  })
  group?: string;

  @ApiPropertyOptional({ type: [TagDto] })
  tags?: TagDto[];

  @ApiPropertyOptional({ example: 12 })
  notifyCount?: number;

  @ApiPropertyOptional({ example: 11 })
  unreadCount?: number;

  @ApiPropertyOptional({ example: 'China' })
  country?: string;

  @ApiPropertyOptional({ type: GeographicDto })
  geographic?: GeographicDto;

  @ApiPropertyOptional({ example: '西湖区工专路 77 号' })
  address?: string;

  @ApiPropertyOptional({ example: '0752-268888888' })
  phone?: string;
}

export class CurrentUserResponseDto {
  @ApiProperty({ type: CurrentUserDto })
  data: CurrentUserDto;
}
