import { TaskEntity, TaskId } from '../../entities/task.entity';
import { CreateTaskCommand } from './create-task.command';
import { PatchTaskCommand } from './patch-task.command';

export interface TaskUseCases {

  createTask(command: CreateTaskCommand): Promise<TaskEntity>;

  getTask(taskId: TaskId): Promise<TaskEntity>;

  patchTask(command: PatchTaskCommand): Promise<TaskEntity>;

}