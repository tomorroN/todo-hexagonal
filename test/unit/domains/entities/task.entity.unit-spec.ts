import {
  TaskEntity,
  TaskStatus,
} from '../../../../src/domains/entities/task.entity';

describe('TaskEntity', () => {
  describe('from', () => {
    it('Should create TaskEntity', () => {
      const title = 'title';
      const taskEntity = TaskEntity.from({ title });

      expect(taskEntity).toBeInstanceOf(TaskEntity);
      expect(typeof taskEntity.id).toEqual('string');
      expect(typeof taskEntity.title).toEqual('string');
      expect(typeof taskEntity.status).toEqual('string');
      expect(typeof taskEntity.createdAt).toEqual('number');
      expect(taskEntity.title).toEqual(title);
      expect(taskEntity.status).toEqual(TaskStatus.IN_PROGRESS);
    });
  });

  describe('patch', () => {
    let taskEntity: TaskEntity;
    const oldStatus = TaskStatus.IN_PROGRESS;
    const oldTitle = 'oldTitle';
    const status = TaskStatus.DONE;
    const title = 'newTitle';

    beforeEach(() => {
      taskEntity = TaskEntity.from({ title: oldTitle });
    });

    it('Should patch title', () => {
      taskEntity.patch({ title });

      expect(taskEntity.title).toEqual(title);
      expect(taskEntity.status).toEqual(oldStatus);
    });

    it('Should patch status', () => {
      taskEntity.patch({ status });

      expect(taskEntity.status).toEqual(status);
      expect(taskEntity.title).toEqual(oldTitle);
    });

    it('Should patch title, status', () => {
      taskEntity.patch({ title, status });

      expect(taskEntity.status).toEqual(status);
      expect(taskEntity.title).toEqual(title);
    });

    it('Should not patch TaskEntity', () => {
      taskEntity.patch({});

      expect(taskEntity.status).toEqual(oldStatus);
      expect(taskEntity.title).toEqual(oldTitle);
    });
  });
});
