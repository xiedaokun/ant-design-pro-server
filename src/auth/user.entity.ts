import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 50, default: 'user' })
  authority: string;

  @Column({ nullable: true, length: 100 })
  name: string;

  @Column({ nullable: true, length: 500 })
  avatar: string;

  @Column({ nullable: true, length: 100 })
  email: string;

  @Column({ nullable: true, length: 20 })
  phone: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
