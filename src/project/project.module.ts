import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectNotice } from './project-notice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectNotice])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
