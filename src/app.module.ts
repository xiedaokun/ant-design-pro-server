/**
 * 应用程序根模块
 * 配置数据库连接和导入所有功能模块
 */
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RuleModule } from './rule/rule.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AnalysisModule } from './analysis/analysis.module';
import { TagsModule } from './tags/tags.module';
import { ProjectModule } from './project/project.module';
import { ActivityModule } from './activity/activity.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [
    // ============ 环境变量配置 ============
    ConfigModule.forRoot({
      isGlobal: true, // 全局可用
      envFilePath: '.env', // 环境变量文件路径
    }),

    // ============ 本地 MySQL 配置（已注释） ============
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '123456',
    //   database: 'ant_design_pro',
    //   autoLoadEntities: true,
    //   synchronize: false,
    // }),

    // ============ TiDB Cloud 云数据库配置 ============
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
      port: 4000,
      username: '2G3uBenLiDNRcMH.root',
      password: 'AXlYO5rCZrzMpD1b',
      database: 'ant_design_pro',
      ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true,
      },
      autoLoadEntities: true, // 自动加载实体
      synchronize: true, // 自动同步表结构（生产环境应设为 false）
    }),

    // ============ 功能模块 ============
    RuleModule, // 规则管理模块
    AuthModule, // 认证模块（登录/登出）
    UserModule, // 用户管理模块
    AnalysisModule, // 数据分析图表模块
    TagsModule, // 标签管理模块
    ProjectModule, // 项目管理模块
    ActivityModule, // 活动动态模块
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // 全局 JWT 认证守卫，所有路由默认需要 token（除 @Public() 装饰的路由）
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
