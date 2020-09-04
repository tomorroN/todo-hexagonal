import { PatchTask, TaskId, TaskStatus } from '../../entities/task.entity';

export class PatchTaskCommand implements PatchTask {
  constructor(
    private readonly _taskId: TaskId,
    private readonly _title?: string,
    private readonly _status?: TaskStatus
  ) {
  }

  get title(): string | undefined {
    return this._title;
  }

  get status(): TaskStatus | undefined {
    return this._status;
  }

  get taskId(): TaskId {
    return this._taskId;
  }
}