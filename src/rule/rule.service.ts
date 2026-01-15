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

  // 创建
  create(createRuleDto: CreateRuleDto): Promise<Rule> {
    const rule = this.ruleRepository.create(createRuleDto);
    return this.ruleRepository.save(rule);
  }

  // 分页查询
  async findPage(
    current: number = 1,
    pageSize: number = 10,
    name?: string,
    status?: string,
  ) {
    const where: FindOptionsWhere<Rule> = {};
    if (name) {
      where.name = Like(`%${name}%`);
    }
    if (status) {
      where.status = status;
    }

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

  // 查询所有
  findAll(): Promise<Rule[]> {
    return this.ruleRepository.find();
  }

  // 查询单个
  findOne(id: number): Promise<Rule | null> {
    return this.ruleRepository.findOneBy({ id });
  }

  // 更新
  async update(id: number, updateRuleDto: UpdateRuleDto): Promise<Rule | null> {
    await this.ruleRepository.update(id, updateRuleDto);
    return this.findOne(id);
  }

  // 删除
  async remove(id: number): Promise<{ success: boolean }> {
    await this.ruleRepository.delete(id);
    return { success: true };
  }

  // 批量删除
  async removeMany(ids: number[]): Promise<{ success: boolean }> {
    await this.ruleRepository.delete(ids);
    return { success: true };
  }
}
