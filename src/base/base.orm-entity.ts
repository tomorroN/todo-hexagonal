import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { Maybe } from "../utils/custom.types";

export abstract class BaseOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;

  @Column({ type: 'boolean', default: false })
  isArchived!: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime!: Date;

  @Column({ type: 'varchar', length: 300, nullable: true })
  createdBy?: Maybe<string>;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime!: Date;

  @Column({ type: 'varchar', length: 300, nullable: true })
  lastChangedBy?: Maybe<string>;

  @Column({ type: 'varchar', length: 300, nullable: true })
  internalComment?: Maybe<string>;
}
