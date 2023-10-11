import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

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
  await app.listen(port);
}

bootstrap().catch((err) => {
  console.log(`Fatal error during initialization:`, err);
  process.exit(1);
});
