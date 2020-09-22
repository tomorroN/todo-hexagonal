import { Injectable } from '@nestjs/common';
import { TaskPort } from '../../domains/ports/out/task.port';
import { TaskEntity, TaskId } from '../../domains/entities/task.entity';
import { TaskOrmEntity } from './task.orm-entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskMapper } from './task.mapper';

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
      throw new Error('Task not found');
    }
    return TaskMapper.mapToDomain(task);
  }

  async save(taskEntity: TaskEntity): Promise<TaskEntity> {
    return TaskMapper.mapToDomain(
      await this._taskRepository.save(TaskMapper.mapToOrmEntity(taskEntity)),
    );
  }
}
