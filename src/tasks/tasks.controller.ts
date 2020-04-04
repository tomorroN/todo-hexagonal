import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {
  }

  @Get()
  getAll() {
    return this.tasksService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.tasksService.getById(id);
  }

  @Post()
  create(@Body() createDto: CreateTaskDto) {
    return this.tasksService.create(createDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }

  @Patch('/:id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus
  ) {
    return this.tasksService.updateStatus(id, status);
  }
}
