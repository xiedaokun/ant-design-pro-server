/**
 * 用户服务
 * 处理用户信息查询
 */
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

  /**
   * 获取当前登录用户信息
   * @param userId 用户 ID
   * @returns 用户详情
   */
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

    // 用户未找到，返回空数据
    return {
      data: {
        name: '',
        avatar: '',
        userid: '',
      },
    };
  }

  /**
   * 根据用户 ID 查询用户详情
   * @param userId 用户 ID
   * @returns 用户详情实体
   */
  async findProfileByUserId(userId: string): Promise<UserProfile | null> {
    return this.userProfileRepository.findOne({ where: { userId } });
  }
}
