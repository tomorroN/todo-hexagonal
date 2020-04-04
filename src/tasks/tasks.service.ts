import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAll(): Task[] {
    return this.tasks;
  }

  getById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  create(dto: CreateTaskDto): Task {
    const task: Task = {
      ...dto,
      id: uuid.v4(),
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  delete(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateStatus(id: string, status: TaskStatus): Task {
    const task = this.getById(id);

    task.status = status;

    return task;
  }
}
