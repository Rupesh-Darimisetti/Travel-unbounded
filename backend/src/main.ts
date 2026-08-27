import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL ?? ['http://localhost:3000'],
    methods: ['GET', 'POST', 'OPTIONS'],
  });

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      stopAtFirstError: false,
      exceptionFactory: (errors) => {
        const fieldErrors = Object.fromEntries(
          errors.map((error) => {
            const constraints = error.constraints
              ? Object.values(error.constraints)
              : [];
            const firstErrorMessage = constraints[0] ?? 'Invalid value.';
            return [error.property, firstErrorMessage];
          }),
        );

        return new BadRequestException({
          success: false,
          message: 'Please correct the highlighted fields.',
          errors: fieldErrors,
        });
      },
    }),
  );

  const port = Number(process.env.PORT ?? 4000);
  await app.listen(port);
}

bootstrap().catch((err) => {
  console.error('Application failed to start:', err);
  process.exit(1);
});
