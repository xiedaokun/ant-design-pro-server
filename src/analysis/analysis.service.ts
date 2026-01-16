import { Injectable } from '@nestjs/common';
import {
  AnalysisChartResponseDto,
  SearchDataDto,
  OfflineChartDataDto,
} from './dto/analysis-chart.dto';

@Injectable()
export class AnalysisService {
  getChartData(): AnalysisChartResponseDto {
    return {
      data: {
        visitData: [
          { x: '2026-01-16', y: 7 },
          { x: '2026-01-17', y: 5 },
          { x: '2026-01-18', y: 4 },
          { x: '2026-01-19', y: 2 },
          { x: '2026-01-20', y: 4 },
          { x: '2026-01-21', y: 7 },
          { x: '2026-01-22', y: 5 },
          { x: '2026-01-23', y: 6 },
          { x: '2026-01-24', y: 5 },
          { x: '2026-01-25', y: 9 },
          { x: '2026-01-26', y: 6 },
          { x: '2026-01-27', y: 3 },
          { x: '2026-01-28', y: 1 },
          { x: '2026-01-29', y: 5 },
          { x: '2026-01-30', y: 3 },
          { x: '2026-01-31', y: 6 },
          { x: '2026-02-01', y: 5 },
        ],
        visitData2: [
          { x: '2026-01-16', y: 1 },
          { x: '2026-01-17', y: 6 },
          { x: '2026-01-18', y: 4 },
          { x: '2026-01-19', y: 8 },
          { x: '2026-01-20', y: 3 },
          { x: '2026-01-21', y: 7 },
          { x: '2026-01-22', y: 2 },
        ],
        salesData: [
          { x: '1月', y: 839 },
          { x: '2月', y: 439 },
          { x: '3月', y: 463 },
          { x: '4月', y: 810 },
          { x: '5月', y: 292 },
          { x: '6月', y: 1010 },
          { x: '7月', y: 226 },
          { x: '8月', y: 960 },
          { x: '9月', y: 1050 },
          { x: '10月', y: 364 },
          { x: '11月', y: 1000 },
          { x: '12月', y: 745 },
        ],
        searchData: this.generateSearchData(),
        offlineData: [
          { name: 'Stores 0', cvr: 0.2 },
          { name: 'Stores 1', cvr: 0.8 },
          { name: 'Stores 2', cvr: 0.4 },
          { name: 'Stores 3', cvr: 0.6 },
          { name: 'Stores 4', cvr: 0.8 },
          { name: 'Stores 5', cvr: 0.9 },
          { name: 'Stores 6', cvr: 0.8 },
          { name: 'Stores 7', cvr: 0.5 },
          { name: 'Stores 8', cvr: 0.2 },
          { name: 'Stores 9', cvr: 0.8 },
        ],
        offlineChartData: this.generateOfflineChartData(),
        salesTypeData: [
          { x: '家用电器', y: 4544 },
          { x: '食用酒水', y: 3321 },
          { x: '个护健康', y: 3113 },
          { x: '服饰箱包', y: 2341 },
          { x: '母婴产品', y: 1231 },
          { x: '其他', y: 1231 },
        ],
        salesTypeDataOnline: [
          { x: '家用电器', y: 244 },
          { x: '食用酒水', y: 321 },
          { x: '个护健康', y: 311 },
          { x: '服饰箱包', y: 41 },
          { x: '母婴产品', y: 121 },
          { x: '其他', y: 111 },
        ],
        salesTypeDataOffline: [
          { x: '家用电器', y: 99 },
          { x: '食用酒水', y: 188 },
          { x: '个护健康', y: 344 },
          { x: '服饰箱包', y: 255 },
          { x: '其他', y: 65 },
        ],
        radarData: [
          { name: '个人', label: '引用', value: 10 },
          { name: '个人', label: '口碑', value: 8 },
          { name: '个人', label: '产量', value: 4 },
          { name: '个人', label: '贡献', value: 5 },
          { name: '个人', label: '热度', value: 7 },
          { name: '团队', label: '引用', value: 3 },
          { name: '团队', label: '口碑', value: 9 },
          { name: '团队', label: '产量', value: 6 },
          { name: '团队', label: '贡献', value: 3 },
          { name: '团队', label: '热度', value: 1 },
          { name: '部门', label: '引用', value: 4 },
          { name: '部门', label: '口碑', value: 1 },
          { name: '部门', label: '产量', value: 6 },
          { name: '部门', label: '贡献', value: 5 },
          { name: '部门', label: '热度', value: 7 },
        ],
      },
    };
  }

  private generateSearchData(): SearchDataDto[] {
    const data: SearchDataDto[] = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        index: i + 1,
        keyword: `搜索关键词-${i}`,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor(Math.random() * 2),
      });
    }
    return data;
  }

  private generateOfflineChartData(): OfflineChartDataDto[] {
    const data: OfflineChartDataDto[] = [];
    const times = [
      '01:28',
      '01:58',
      '02:28',
      '02:58',
      '03:28',
      '03:58',
      '04:28',
      '04:58',
      '05:28',
      '05:58',
      '06:28',
      '06:58',
      '07:28',
      '07:58',
      '08:28',
      '08:58',
      '09:28',
      '09:58',
      '10:28',
      '10:58',
    ];
    for (const time of times) {
      data.push({
        date: time,
        type: '客流量',
        value: Math.floor(Math.random() * 100) + 10,
      });
      data.push({
        date: time,
        type: '支付笔数',
        value: Math.floor(Math.random() * 100) + 10,
      });
    }
    return data;
  }
}
