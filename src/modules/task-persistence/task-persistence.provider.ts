import { TaskPersistenceAdapterService } from './task-persistence-adapter.service';
import { TaskUseCasesSymbol } from '../../domains/ports/in/task.use-cases';
import { TaskService } from '../../domains/services/task-service';
import { FactoryProvider } from '@nestjs/common';

export const TaskPersistenceAdapterServiceProvider: FactoryProvider<TaskService> = {
  provide: TaskUseCasesSymbol,
  useFactory: (taskPersistenceAdapterService: TaskPersistenceAdapterService) =>
    new TaskService(taskPersistenceAdapterService),
  inject: [TaskPersistenceAdapterService],
};
