import { TaskEntity } from '../../domains/entities/task.entity';
import { TaskOrmEntity } from './task.orm-entity';

export class TaskMapper {
  static mapToOrmEntity({
    id,
    createdAt,
    status,
    title,
  }: TaskEntity): TaskOrmEntity {
    const taskOrmEntity = new TaskOrmEntity();
    taskOrmEntity.title = title;
    taskOrmEntity.status = status;
    taskOrmEntity.createDateTime = new Date(createdAt);
    if (id) {
      taskOrmEntity.id = id;
    }
    return taskOrmEntity;
  }

  static mapToDomain({
    id,
    title,
    status,
    createDateTime,
  }: TaskOrmEntity): TaskEntity {
    return new TaskEntity(id, title, status, createDateTime.valueOf());
  }
}
