import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProfile } from './user-profile.entity';
import { CurrentUserResponseDto } from './dto/current-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserProfile)
    private userProfileRepository: Repository<UserProfile>,
  ) {}

  async getCurrentUser(userId: string): Promise<CurrentUserResponseDto> {
    const profile = await this.userProfileRepository.findOne({
      where: { userId },
    });

    if (profile) {
      return {
        data: {
          name: profile.name,
          avatar: profile.avatar || '',
          userid: profile.userId,
          email: profile.email,
          signature: profile.signature,
          title: profile.title,
          group: profile.group,
          tags: profile.tags || [],
          notifyCount: profile.notifyCount,
          unreadCount: profile.unreadCount,
          country: profile.country,
          geographic: profile.geographic,
          address: profile.address,
          phone: profile.phone,
        },
      };
    }

    // 默认返回空数据
    return {
      data: {
        name: '',
        avatar: '',
        userid: '',
      },
    };
  }

  async findProfileByUserId(userId: string): Promise<UserProfile | null> {
    return this.userProfileRepository.findOne({ where: { userId } });
  }
}
