import { NestFactory } from '@nestjs/core';
import { ViberModule } from './viber.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(ViberModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const errMsg = {};
        errors.forEach((err) => {
          errMsg[err.property] = [...Object.values(err.constraints)];
        });

        return new BadRequestException(errMsg);
      },
    }),
  );

  await app.listen(3002);
}
bootstrap();
