import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await AppDataSource.initialize().then(() =>
    console.log('Connected to database'),
  );
}
bootstrap();
