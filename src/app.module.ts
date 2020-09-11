import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "./config/config.service";

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())
  ],
})
export class AppModule {}
