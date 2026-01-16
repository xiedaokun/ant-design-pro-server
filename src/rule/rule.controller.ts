import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { RuleService } from './rule.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';

@ApiTags('rule')
@Controller('api/rule')
export class RuleController {
  constructor(private readonly ruleService: RuleService) {}

  @Post()
  @ApiOperation({ summary: '创建规则', description: '创建一条新的规则记录' })
  create(@Body() createRuleDto: CreateRuleDto) {
    return this.ruleService.create(createRuleDto);
  }

  @Get()
  @ApiOperation({
    summary: '分页查询规则',
    description: '获取规则列表，支持分页和筛选',
  })
  @ApiQuery({
    name: 'current',
    required: false,
    description: '当前页码',
    example: 1,
  })
  @ApiQuery({
    name: 'pageSize',
    required: false,
    description: '每页条数',
    example: 10,
  })
  @ApiQuery({ name: 'name', required: false, description: '按名称筛选' })
  @ApiQuery({ name: 'status', required: false, description: '按状态筛选' })
  findAll(
    @Query('current') current: string = '1',
    @Query('pageSize') pageSize: string = '10',
    @Query('name') name?: string,
    @Query('status') status?: string,
  ) {
    return this.ruleService.findPage(+current, +pageSize, name, status);
  }

  @Get(':id')
  @ApiOperation({
    summary: '查询单个规则',
    description: '根据 ID 获取规则详情',
  })
  @ApiParam({ name: 'id', description: '规则 ID' })
  findOne(@Param('id') id: string) {
    return this.ruleService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新规则', description: '根据 ID 更新规则信息' })
  @ApiParam({ name: 'id', description: '规则 ID' })
  update(@Param('id') id: string, @Body() updateRuleDto: UpdateRuleDto) {
    return this.ruleService.update(+id, updateRuleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除规则', description: '根据 ID 删除规则' })
  @ApiParam({ name: 'id', description: '规则 ID' })
  remove(@Param('id') id: string) {
    return this.ruleService.remove(+id);
  }

  @Post('batch-delete')
  @ApiOperation({
    summary: '批量删除规则',
    description: '根据 ID 数组批量删除规则',
  })
  @ApiBody({
    schema: {
      properties: { ids: { type: 'array', items: { type: 'number' } } },
    },
  })
  removeMany(@Body('ids') ids: number[]) {
    return this.ruleService.removeMany(ids);
  }
}
