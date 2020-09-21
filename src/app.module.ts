import { Module } from '@nestjs/common';
import { TaskPersistenceModule } from './modules/task-persistence/task-persistence.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { TaskRestApiModule } from './modules/task-rest-api/task-rest-api.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TaskPersistenceModule,
    TaskRestApiModule,
  ],
})
export class AppModule {}
