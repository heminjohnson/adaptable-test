import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 👈This will transform our payload to DTO instance
      forbidNonWhitelisted: true, // 👈Throw errors when non whitelisted properties are found
      whitelist: true,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('Trend Radar')
    .setDescription('Trend Radar API Docs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}

bootstrap().catch((err) => {
  console.log(`Fatal error during initialization:`, err);
  process.exit(1);
});
