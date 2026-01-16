import { ApiProperty } from '@nestjs/swagger';

export class VisitDataDto {
  @ApiProperty({ example: '2026-01-16' })
  x: string;

  @ApiProperty({ example: 7 })
  y: number;
}

export class SalesDataDto {
  @ApiProperty({ example: '1月' })
  x: string;

  @ApiProperty({ example: 839 })
  y: number;
}

export class SearchDataDto {
  @ApiProperty({ example: 1 })
  index: number;

  @ApiProperty({ example: '搜索关键词-0' })
  keyword: string;

  @ApiProperty({ example: 91 })
  count: number;

  @ApiProperty({ example: 83 })
  range: number;

  @ApiProperty({ example: 0 })
  status: number;
}

export class OfflineDataDto {
  @ApiProperty({ example: 'Stores 0' })
  name: string;

  @ApiProperty({ example: 0.2 })
  cvr: number;
}

export class OfflineChartDataDto {
  @ApiProperty({ example: '01:28' })
  date: string;

  @ApiProperty({ example: '客流量' })
  type: string;

  @ApiProperty({ example: 14 })
  value: number;
}

export class SalesTypeDataDto {
  @ApiProperty({ example: '家用电器' })
  x: string;

  @ApiProperty({ example: 4544 })
  y: number;
}

export class RadarDataDto {
  @ApiProperty({ example: '个人' })
  name: string;

  @ApiProperty({ example: '引用' })
  label: string;

  @ApiProperty({ example: 10 })
  value: number;
}

export class AnalysisChartDataDto {
  @ApiProperty({ type: [VisitDataDto] })
  visitData: VisitDataDto[];

  @ApiProperty({ type: [VisitDataDto] })
  visitData2: VisitDataDto[];

  @ApiProperty({ type: [SalesDataDto] })
  salesData: SalesDataDto[];

  @ApiProperty({ type: [SearchDataDto] })
  searchData: SearchDataDto[];

  @ApiProperty({ type: [OfflineDataDto] })
  offlineData: OfflineDataDto[];

  @ApiProperty({ type: [OfflineChartDataDto] })
  offlineChartData: OfflineChartDataDto[];

  @ApiProperty({ type: [SalesTypeDataDto] })
  salesTypeData: SalesTypeDataDto[];

  @ApiProperty({ type: [SalesTypeDataDto] })
  salesTypeDataOnline: SalesTypeDataDto[];

  @ApiProperty({ type: [SalesTypeDataDto] })
  salesTypeDataOffline: SalesTypeDataDto[];

  @ApiProperty({ type: [RadarDataDto] })
  radarData: RadarDataDto[];
}

export class AnalysisChartResponseDto {
  @ApiProperty({ type: AnalysisChartDataDto })
  data: AnalysisChartDataDto;
}
