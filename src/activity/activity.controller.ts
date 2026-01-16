import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ActivityService } from './activity.service';
import { ActivitiesResponseDto } from './dto/activity.dto';

@ApiTags('活动动态')
@Controller('api')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get('activities')
  @ApiOperation({
    summary: '获取活动动态',
    description: '获取用户活动动态列表',
  })
  @ApiResponse({
    status: 200,
    description: '活动动态列表',
    type: ActivitiesResponseDto,
  })
  async getActivities(): Promise<ActivitiesResponseDto> {
    return this.activityService.getActivities();
  }
}
