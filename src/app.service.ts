import { Injectable } from "@nestjs/common/decorators";
import RepositorioCredencialAcesso from "./repositorios/repositorio-credencial-acesso";
import { PrismaService } from "./database/PrismaService";
import { CreateCredencialAcessoDto } from "./dto/create-credencial-acesso.dto";
import { UpdateCredencialAcessoDto } from "./dto/update-credencial-acesso.dto";


//CadastroCredencialAcesso
@Injectable()
export class CredencialAcessoService {
  repo: RepositorioCredencialAcesso;
  constructor(
    private prisma: PrismaService
    ) {
      this.repo = new RepositorioCredencialAcesso(prisma)
    }

  async existeCredencial(data: CreateCredencialAcessoDto) {

    return await this.getCredencial(data.login, data.senha)
   
  }

  async getCredencial (login: string, senha: string){
    
    return this.repo.getCredencial(login, senha)
  }
  async createCredencial (data: CreateCredencialAcessoDto){
    
    return this.repo.createCredencial(data.login,data.senha)
  }

  async updatePassword (data: UpdateCredencialAcessoDto){
    
    return this.repo.updatePassword(data.login, data.senhaAntiga, data.senhaNova);
  }
}
