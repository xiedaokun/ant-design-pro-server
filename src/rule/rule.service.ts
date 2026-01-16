/**
 * 规则服务
 * 处理规则的增删改查
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, FindOptionsWhere } from 'typeorm';
import { Rule } from './rule.entity';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';

@Injectable()
export class RuleService {
  constructor(
    @InjectRepository(Rule)
    private ruleRepository: Repository<Rule>,
  ) {}

  /**
   * 创建规则
   * @param createRuleDto 规则创建参数
   * @returns 新创建的规则
   */
  create(createRuleDto: CreateRuleDto): Promise<Rule> {
    const rule = this.ruleRepository.create(createRuleDto);
    return this.ruleRepository.save(rule);
  }

  /**
   * 分页查询规则列表
   * @param current 当前页码
   * @param pageSize 每页条数
   * @param name 规则名称（模糊搜索）
   * @param status 规则状态
   * @returns 分页结果
   */
  async findPage(
    current: number = 1,
    pageSize: number = 10,
    name?: string,
    status?: string,
  ) {
    // 构建查询条件
    const where: FindOptionsWhere<Rule> = {};
    if (name) {
      where.name = Like(`%${name}%`);
    }
    if (status) {
      where.status = status;
    }

    // 执行分页查询
    const [data, total] = await this.ruleRepository.findAndCount({
      where,
      skip: (current - 1) * pageSize,
      take: pageSize,
      order: { id: 'DESC' },
    });

    return {
      data,
      total,
      success: true,
      pageSize,
      current,
    };
  }

  /**
   * 查询所有规则
   * @returns 规则列表
   */
  findAll(): Promise<Rule[]> {
    return this.ruleRepository.find();
  }

  /**
   * 查询单个规则
   * @param id 规则 ID
   * @returns 规则详情
   */
  findOne(id: number): Promise<Rule | null> {
    return this.ruleRepository.findOneBy({ id });
  }

  /**
   * 更新规则
   * @param id 规则 ID
   * @param updateRuleDto 更新参数
   * @returns 更新后的规则
   */
  async update(id: number, updateRuleDto: UpdateRuleDto): Promise<Rule | null> {
    await this.ruleRepository.update(id, updateRuleDto);
    return this.findOne(id);
  }

  /**
   * 删除规则
   * @param id 规则 ID
   * @returns 操作结果
   */
  async remove(id: number): Promise<{ success: boolean }> {
    await this.ruleRepository.delete(id);
    return { success: true };
  }

  /**
   * 批量删除规则
   * @param ids 规则 ID 数组
   * @returns 操作结果
   */
  async removeMany(ids: number[]): Promise<{ success: boolean }> {
    await this.ruleRepository.delete(ids);
    return { success: true };
  }
}
