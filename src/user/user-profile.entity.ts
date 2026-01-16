import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_profile')
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', length: 50, unique: true })
  userId: string;

  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true, length: 500 })
  avatar: string;

  @Column({ nullable: true, length: 100 })
  email: string;

  @Column({ nullable: true, length: 200 })
  signature: string;

  @Column({ nullable: true, length: 100 })
  title: string;

  @Column({ name: 'user_group', nullable: true, length: 200 })
  group: string;

  @Column({ type: 'json', nullable: true })
  tags: { key: string; label: string }[];

  @Column({ name: 'notify_count', default: 0 })
  notifyCount: number;

  @Column({ name: 'unread_count', default: 0 })
  unreadCount: number;

  @Column({ nullable: true, length: 50 })
  country: string;

  @Column({ type: 'json', nullable: true })
  geographic: {
    province: { label: string; key: string };
    city: { label: string; key: string };
  };

  @Column({ nullable: true, length: 200 })
  address: string;

  @Column({ nullable: true, length: 50 })
  phone: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
