import { Injectable } from '@nestjs/common';
import { TaskPort } from '../../domains/ports/out/task.port';
import { TaskEntity, TaskId } from '../../domains/entities/task.entity';
import { TaskOrmEntity } from './task.orm-entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskPersistenceAdapterService implements TaskPort {
  constructor(
    @InjectRepository(TaskOrmEntity)
    private _taskRepository: Repository<TaskOrmEntity>,
  ) {}

  async get(taskId: TaskId): Promise<TaskEntity> {
    const task = await this._taskRepository.findOne(taskId);
    if (!task) {
      // TODO: monads or error handling
    }
    // TODO: Mapper to domain model
    return (task as unknown) as TaskEntity;
  }

  async save(taskEntity: TaskEntity): Promise<TaskEntity> {
    // TODO: Mapper to domain model
    return await this._taskRepository.save(
      taskEntity /*TODO: Mapper to orm entity*/,
    );
  }
}
