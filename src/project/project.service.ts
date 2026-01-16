import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectNotice } from './project-notice.entity';
import { ProjectNoticeResponseDto } from './dto/project-notice.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectNotice)
    private projectNoticeRepository: Repository<ProjectNotice>,
  ) {}

  async getNotices(): Promise<ProjectNoticeResponseDto> {
    const notices = await this.projectNoticeRepository.find({
      order: { createdAt: 'DESC' },
    });

    return {
      data: notices.map((notice) => ({
        id: notice.id,
        title: notice.title,
        logo: notice.logo,
        description: notice.description,
        updatedAt: notice.updatedAt.toISOString(),
        member: notice.member,
        href: notice.href || '',
        memberLink: notice.memberLink || '',
      })),
    };
  }
}
