/**
 * 项目通知实体
 * 对应数据库 project_notice 表
 */
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('project_notice')
export class ProjectNotice {
  /** 主键 ID */
  @PrimaryColumn({ length: 50 })
  id: string;

  /** 项目标题 */
  @Column({ length: 100 })
  title: string;

  /** 项目 Logo URL */
  @Column({ length: 500 })
  logo: string;

  /** 项目描述 */
  @Column({ type: 'text' })
  description: string;

  /** 负责团队 */
  @Column({ length: 100 })
  member: string;

  /** 项目链接 */
  @Column({ length: 500, nullable: true, default: '' })
  href: string;

  /** 团队链接 */
  @Column({ name: 'member_link', length: 500, nullable: true, default: '' })
  memberLink: string;

  /** 创建时间 */
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  /** 更新时间 */
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
