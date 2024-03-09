import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredencialEntity } from './interfaces/credencialAcesso.entity';

@Module({
  imports: [DatabaseModule,TypeOrmModule.forFeature([CredencialEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
