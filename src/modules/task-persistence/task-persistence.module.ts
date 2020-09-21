import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskOrmEntity } from './task.orm-entity';
import { TaskPersistenceAdapterService } from './task-persistence-adapter.service';
import { TaskUseCasesSymbol } from '../../domains/ports/in/task.use-cases';
import { TaskPersistenceAdapterServiceProvider } from './task-persistence.provider';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([TaskOrmEntity])],
  providers: [
    TaskPersistenceAdapterService,
    TaskPersistenceAdapterServiceProvider,
  ],
  exports: [TaskUseCasesSymbol],
})
export class TaskPersistenceModule {}
