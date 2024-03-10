import { Controller, Get, Logger } from '@nestjs/common';
import { CredencialAcessoService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CredencialAcesso } from './interfaces/credencialAcesso.interface';
import { CreateCredencialAcessoDto } from './dto/create-credencial-acesso.dto';
import { UpdateCredencialAcessoDto } from './dto/update-credencial-acesso.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: CredencialAcessoService) {}

  //private readonly logger = new Logger(AppController.name);

  @MessagePattern('login')
  async index(@Payload() data:CreateCredencialAcessoDto): Promise<CredencialAcesso> {
    console.log("chegou controller login")
    //this.logger.log(`Teste User: ${JSON.stringify(data)}`);
    return this.appService.existeCredencial(data);
  }

  @MessagePattern('create-user')
  async criar(@Payload() data: CreateCredencialAcessoDto): Promise<CredencialAcesso> {
    
    return this.appService.createCredencial(data);
  }

  @MessagePattern('alter-password')
  async update(data: UpdateCredencialAcessoDto): Promise<CredencialAcesso> {
    
    return this.appService.updatePassword(data);
  }
}
