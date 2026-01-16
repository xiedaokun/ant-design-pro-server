import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('activity')
export class Activity {
  @PrimaryColumn({ length: 50 })
  id: string;

  @Column({ type: 'json' })
  user: { name: string; avatar: string };

  @Column({ type: 'json', nullable: true })
  group: { name: string; link: string } | null;

  @Column({ type: 'json', nullable: true })
  project: { name: string; link: string } | null;

  @Column({ type: 'json', nullable: true })
  comment: { name: string; link: string } | null;

  @Column({ type: 'text' })
  template: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
