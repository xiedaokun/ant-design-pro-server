import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RuleModule } from './rule/rule.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'ant_design_pro',
      autoLoadEntities: true,
      synchronize: false, // 生产环境设为 false
    }),
    RuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
