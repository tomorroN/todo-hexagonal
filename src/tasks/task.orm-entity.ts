import { BaseOrmEntity } from '../base/base.orm-entity';
import { TaskStatus } from '../domains/entities/task.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'task' })
export class TaskOrmEntity extends BaseOrmEntity {
  @Column({ type: 'varchar', length: 300 })
  title!: string;

  @Column({ type: 'varchar', length: 50 })
  status!: TaskStatus;
}
