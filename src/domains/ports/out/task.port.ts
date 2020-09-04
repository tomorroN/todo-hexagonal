import { TaskEntity, TaskId } from '../../entities/task.entity';

export interface TaskPort {

  get(taskId: TaskId): Promise<TaskEntity>;

  save(taskEntity: TaskEntity): Promise<TaskEntity>;

}