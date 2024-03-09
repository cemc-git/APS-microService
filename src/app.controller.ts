import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CredencialAcesso } from './interfaces/credencialAcesso.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private readonly logger = new Logger(AppController.name);

  @MessagePattern('find')
  async index(login:string, senha: string): Promise<CredencialAcesso> {
    return this.appService.find(login, senha);
  }
  @MessagePattern('create')
  async criar(login:string, senha:string): Promise<CredencialAcesso> {
    return this.appService.create(login,senha);
  }
}
