import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AuthModule } from './auth.module';
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AuthModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:password@localhost:5672'],
      queue: 'auth_queue',
      queueOptions: { durable: false },
    },
  });
  await app.listen();
}
bootstrap();
