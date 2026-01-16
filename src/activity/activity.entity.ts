/**
 * 活动动态实体
 * 对应数据库 activity 表
 */
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('activity')
export class Activity {
  /** 主键 ID */
  @PrimaryColumn({ length: 50 })
  id: string;

  /** 用户信息（JSON 格式：{name, avatar}） */
  @Column({ type: 'json' })
  user: { name: string; avatar: string };

  /** 分组信息（JSON 格式：{name, link}） */
  @Column({ type: 'json', nullable: true })
  group: { name: string; link: string } | null;

  /** 项目信息（JSON 格式：{name, link}） */
  @Column({ type: 'json', nullable: true })
  project: { name: string; link: string } | null;

  /** 评论信息（JSON 格式：{name, link}） */
  @Column({ type: 'json', nullable: true })
  comment: { name: string; link: string } | null;

  /** 动态模板（如：在 @{group} 新建项目 @{project}） */
  @Column({ type: 'text' })
  template: string;

  /** 创建时间 */
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  /** 更新时间 */
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
