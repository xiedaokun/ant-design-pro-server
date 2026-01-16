/**
 * 规则实体
 * 对应数据库 rule 表
 */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('rule')
export class Rule {
  /** 主键 ID */
  @PrimaryGeneratedColumn()
  id: number;

  /** 是否禁用 */
  @Column({ default: false })
  disabled: boolean;

  /** 链接地址 */
  @Column({ nullable: true, length: 500 })
  href: string;

  /** 头像 URL */
  @Column({ nullable: true, length: 500 })
  avatar: string;

  /** 规则名称 */
  @Column({ length: 100 })
  name: string;

  /** 负责人 */
  @Column({ nullable: true, length: 50 })
  owner: string;

  /** 规则描述 */
  @Column({ name: 'desc', type: 'text', nullable: true })
  desc: string;

  /** 调用次数 */
  @Column({ name: 'call_no', default: 0 })
  callNo: number;

  /** 状态：0-默认 1-生效 2-失效 3-关闭 */
  @Column({ default: '0', length: 10 })
  status: string;

  /** 进度（0-100） */
  @Column({ default: 0 })
  progress: number;

  /** 创建时间 */
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  /** 更新时间 */
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
