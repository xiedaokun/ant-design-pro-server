import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('project_notice')
export class ProjectNotice {
  @PrimaryColumn({ length: 50 })
  id: string;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 500 })
  logo: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ length: 100 })
  member: string;

  @Column({ length: 500, nullable: true, default: '' })
  href: string;

  @Column({ name: 'member_link', length: 500, nullable: true, default: '' })
  memberLink: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
