import { TaskFrom } from '../../entities/task.entity';

export class CreateTaskCommand implements TaskFrom {
  constructor(private readonly _title: string) {}

  get title(): string {
    return this._title;
  }
}
