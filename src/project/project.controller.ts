import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProjectService } from './project.service';
import { ProjectNoticeResponseDto } from './dto/project-notice.dto';

@ApiTags('项目管理')
@Controller('api/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('notice')
  @ApiOperation({ summary: '获取项目通知', description: '获取项目通知列表' })
  @ApiResponse({
    status: 200,
    description: '项目通知列表',
    type: ProjectNoticeResponseDto,
  })
  async getNotices(): Promise<ProjectNoticeResponseDto> {
    return this.projectService.getNotices();
  }
}
