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
import { RuleService } from './rule.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';

@Controller('api/rule')
export class RuleController {
  constructor(private readonly ruleService: RuleService) {}

  // 创建规则
  @Post()
  create(@Body() createRuleDto: CreateRuleDto) {
    return this.ruleService.create(createRuleDto);
  }

  // 分页查询（兼容 Ant Design Pro Table）
  @Get()
  findAll(
    @Query('current') current: string = '1',
    @Query('pageSize') pageSize: string = '10',
    @Query('name') name?: string,
    @Query('status') status?: string,
  ) {
    return this.ruleService.findPage(+current, +pageSize, name, status);
  }

  // 查询单个
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ruleService.findOne(+id);
  }

  // 更新规则
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRuleDto: UpdateRuleDto) {
    return this.ruleService.update(+id, updateRuleDto);
  }

  // 删除规则
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ruleService.remove(+id);
  }

  // 批量删除
  @Post('batch-delete')
  removeMany(@Body('ids') ids: number[]) {
    return this.ruleService.removeMany(ids);
  }
}
