import { Module } from '@nestjs/common';
import { TaskRestApiController } from './task-rest-api.controller';

@Module({
  controllers: [TaskRestApiController],
})
export class TaskRestApiModule {}
