import { Injectable } from "@nestjs/common/decorators";


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

}
