import { NestFactory } from '@nestjs/core';
import { CredencialAcessoModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(CredencialAcessoModule,
    {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'user-consumer',
        allowAutoTopicCreation: true
      }
    }
  });
  await app
    .listen()
    .then(() => logger.log('user-engine is running'))
    .catch((err) => logger.log(err));
}
bootstrap();
