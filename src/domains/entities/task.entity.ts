import { uuid } from 'uuidv4';

export type TaskId = string;

export const enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface TaskFrom {
  title: string;
}

export interface PatchTask {
  title?: string;
  status?: TaskStatus;
}

export class TaskEntity {
  constructor(
    private readonly _id: TaskId,
    private _title: string,
    private _status: TaskStatus,
    private readonly _createdAt: number
  ) {
  }

  static from({ title }: TaskFrom): TaskEntity {
    return new TaskEntity(
      uuid(),
      title,
      TaskStatus.TODO,
      Date.now()
    );
  }

  patch({ status, title }: PatchTask) {
    if (title) {
      this._title = title;
    }
    if (status) {
      this._status = status;
    }
  }
}
