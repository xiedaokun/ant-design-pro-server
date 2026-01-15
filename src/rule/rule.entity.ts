import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('rule')
export class Rule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  disabled: boolean;

  @Column({ nullable: true, length: 500 })
  href: string;

  @Column({ nullable: true, length: 500 })
  avatar: string;

  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true, length: 50 })
  owner: string;

  @Column({ name: 'desc', type: 'text', nullable: true })
  desc: string;

  @Column({ name: 'call_no', default: 0 })
  callNo: number;

  @Column({ default: '0', length: 10 })
  status: string;

  @Column({ default: 0 })
  progress: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
