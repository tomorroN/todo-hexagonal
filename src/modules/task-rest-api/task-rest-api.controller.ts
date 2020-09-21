import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  TaskUseCases,
  TaskUseCasesSymbol,
} from '../../domains/ports/in/task.use-cases';
import { CreateTaskCommand } from '../../domains/ports/in/create-task.command';
import { TaskEntity } from '../../domains/entities/task.entity';

@Controller('tasks')
export class TaskRestApiController {
  constructor(
    @Inject(TaskUseCasesSymbol)
    private readonly _taskService: TaskUseCases,
  ) {}

  @Post('')
  createTask(@Body('title') title: string): Promise<TaskEntity> {
    // TODO: dto with validation, in & out .dto (not domain model)
    return this._taskService.createTask(new CreateTaskCommand(title));
  }
}
