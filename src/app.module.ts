/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CredencialAcessoService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredencialEntity } from './interfaces/credencialAcesso.entity';

@Module({
  imports: [DatabaseModule,TypeOrmModule.forFeature([CredencialEntity])],
  controllers: [AppController],
  providers: [CredencialAcessoService],
})
export class AppModule {}*/

import { Module } from "@nestjs/common";
import { CredencialAcessoService } from "./app.service";
import { PrismaService } from "./database/PrismaService";
import { AppController } from "./app.controller";


@Module({
  imports:[],
  controllers: [AppController],
  providers: [CredencialAcessoService, PrismaService],
  
})
export class CredencialAcessoModule {}
