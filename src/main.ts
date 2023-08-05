import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ArgumentOutOfRangeError } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { CORS } from './constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
  .setTitle("Crud Users whit Oracle and Nestjs")
  .setDescription("This project is created to perform tests with NestJS and Oracle, establishing a connection with TypeORM and generating a user CRUD for testing purposes. The application is dockerized.")
  .setVersion("1.0")
  .build();
  app.setGlobalPrefix('api');
  app.enableCors(CORS);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    },
    ),
  );
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(configService.get('PORT'));
}
bootstrap();
