import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TagsService } from './tags.service';
import { TagsResponseDto } from './dto/tags.dto';

@ApiTags('标签管理')
@Controller('api')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get('tags')
  @ApiOperation({ summary: '获取标签列表', description: '获取城市标签数据' })
  @ApiResponse({ status: 200, description: '标签列表', type: TagsResponseDto })
  getTags(): TagsResponseDto {
    return this.tagsService.getTags();
  }
}
