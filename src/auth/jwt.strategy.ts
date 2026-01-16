/**
 * JWT 认证策略
 * 从请求 Header 中提取并验证 Token
 */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 从 Authorization Header 提取 Token
      ignoreExpiration: false, // 不忽略过期时间
      secretOrKey:
        configService.get<string>('JWT_SECRET') || 'fallback-secret-key', // 从环境变量读取密钥，提供默认值
    });
  }

  /**
   * 验证 Token 有效性
   * @param payload Token 解密后的 payload
   * @returns 用户信息（会挂载到 request.user）
   */
  validate(payload: { sub: number; username: string; authority: string }) {
    return {
      userId: payload.sub,
      username: payload.username,
      authority: payload.authority,
    };
  }
}
