import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './activity.entity';
import { ActivitiesResponseDto } from './dto/activity.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async getActivities(): Promise<ActivitiesResponseDto> {
    const activities = await this.activityRepository.find({
      order: { createdAt: 'DESC' },
    });

    return {
      data: activities.map((activity) => ({
        id: activity.id,
        updatedAt: activity.updatedAt.toISOString(),
        user: activity.user,
        group: activity.group || undefined,
        project: activity.project || undefined,
        comment: activity.comment || undefined,
        template: activity.template,
      })),
    };
  }
}
