import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AnalysisService } from './analysis.service';
import {
  AnalysisChartResponseDto,
  WorkplaceChartResponseDto,
} from './dto/analysis-chart.dto';

@ApiTags('数据分析')
@Controller('api')
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  @Get('fake_analysis_chart_data')
  @ApiOperation({
    summary: '获取分析图表数据',
    description: '获取首页仪表盘的图表数据',
  })
  @ApiResponse({
    status: 200,
    description: '图表数据',
    type: AnalysisChartResponseDto,
  })
  getChartData(): AnalysisChartResponseDto {
    return this.analysisService.getChartData();
  }

  @Get('fake_workplace_chart_data')
  @ApiOperation({
    summary: '获取工作台图表数据',
    description: '获取工作台页面的图表数据',
  })
  @ApiResponse({
    status: 200,
    description: '工作台图表数据',
    type: WorkplaceChartResponseDto,
  })
  getWorkplaceChartData(): WorkplaceChartResponseDto {
    return this.analysisService.getWorkplaceChartData();
  }
}
