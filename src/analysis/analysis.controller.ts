import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AnalysisService } from './analysis.service';
import { AnalysisChartResponseDto } from './dto/analysis-chart.dto';

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
}
