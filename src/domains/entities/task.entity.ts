import { v4 as uuidv4 } from 'uuid';

export type TaskId = string;

export const enum TaskStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface TaskFrom {
  title: string;
}

export interface TaskPatch {
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


  get id(): TaskId {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get status(): TaskStatus {
    return this._status;
  }

  get createdAt(): number {
    return this._createdAt;
  }

  static from({ title }: TaskFrom): TaskEntity {
    return new TaskEntity(
      uuidv4(),
      title,
      TaskStatus.IN_PROGRESS,
      Date.now()
    );
  }

  patch({ status, title }: TaskPatch) {
    if (title) {
      this._title = title;
    }
    if (status) {
      this._status = status;
    }
  }
}
