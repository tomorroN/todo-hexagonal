import { TaskUseCases } from '../ports/in/task.use-cases';
import { CreateTaskCommand } from '../ports/in/create-task.command';
import { TaskEntity, TaskId } from '../entities/task.entity';
import { TaskPort } from '../ports/out/task.port';
import { PatchTaskCommand } from '../ports/in/patch-task.command';

export class TaskService implements TaskUseCases {
  constructor(private readonly _taskPort: TaskPort) {}

  createTask(command: CreateTaskCommand): Promise<TaskEntity> {
    return this._taskPort.save(TaskEntity.from(command));
  }

  getTask(taskId: TaskId): Promise<TaskEntity> {
    return this._taskPort.get(taskId);
  }

  async patchTask(command: PatchTaskCommand): Promise<TaskEntity> {
    const task = await this.getTask(command.taskId);
    task.patch(command);
    return this._taskPort.save(task);
  }

  getManyTasks(params: GetManyTasksCommand): Promise<TaskEntity[]> {
    return this._taskPort.getMany();
  }
}
