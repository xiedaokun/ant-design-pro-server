import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RuleModule } from './rule/rule.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AnalysisModule } from './analysis/analysis.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '123456',
    //   database: 'ant_design_pro',
    //   autoLoadEntities: true,
    //   synchronize: false, // 生产环境设为 false
    // }),

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
      autoLoadEntities: true,
      synchronize: true, // 自动同步表结构到 TiDB Cloud
    }),
    RuleModule,
    AuthModule,
    UserModule,
    AnalysisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
