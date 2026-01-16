/**
 * 用户实体
 * 对应数据库 user 表
 */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  /** 主键 ID */
  @PrimaryGeneratedColumn()
  id: number;

  /** 用户名（唯一） */
  @Column({ length: 50, unique: true })
  username: string;

  /** 密码 */
  @Column({ length: 100 })
  password: string;

  /** 权限：admin / user / guest */
  @Column({ length: 50, default: 'user' })
  authority: string;

  /** 用户昵称 */
  @Column({ nullable: true, length: 100 })
  name: string;

  /** 头像 URL */
  @Column({ nullable: true, length: 500 })
  avatar: string;

  /** 邮箱 */
  @Column({ nullable: true, length: 100 })
  email: string;

  /** 手机号 */
  @Column({ nullable: true, length: 20 })
  phone: string;

  /** 是否激活 */
  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  /** 创建时间 */
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  /** 更新时间 */
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
