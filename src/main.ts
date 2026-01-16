/**
 * 应用程序入口文件
 * 配置 NestJS 应用、CORS、Swagger 文档
 */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

/**
 * 启动函数
 * 初始化 NestJS 应用并启动服务器
 */
async function bootstrap() {
  // 创建 NestJS 应用实例
  const app = await NestFactory.create(AppModule);

  // 启用 CORS，允许前端跨域访问
  app.enableCors({
    origin: true, // 允许所有来源
    credentials: true, // 允许携带 Cookie
  });

  // Swagger API 文档配置
  const config = new DocumentBuilder()
    .setTitle('Ant Design Pro API')
    .setDescription('Ant Design Pro 后台管理系统 API 文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // 启动服务器
  const port = process.env.PORT ?? 8888;
  await app.listen(port);
  console.log(`🚀 Server is running on: http://localhost:${port}`);
  console.log(`📚 Swagger API docs: http://localhost:${port}/api-docs`);
}

void bootstrap();
