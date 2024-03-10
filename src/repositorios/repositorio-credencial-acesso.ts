import { PrismaService } from "src/database/PrismaService";

class RepositorioCredencialAcesso  {
    private prisma: PrismaService

    constructor(
        prisma: PrismaService
        ) {this.prisma= prisma}

    async getCredencial(login: string, senha: string) {
        return await this.prisma.repositorioAcesso.findFirst({
            where: {
              login: login,
              senha: senha
            }
          })
    }
    async createCredencial(login: string, senha: string){
      return await this.prisma.repositorioAcesso.create({
        data: {
          login: login,
          senha: senha
        } 
      })
    }


    async updatePassword(login: string, senhaAntiga: string, senhaNova: string) {
      console.log('Chegou')
      console.log('senhaAntiga ' + senhaAntiga)
      return await this.prisma.repositorioAcesso.update({
        where: {
          login: login,
          senha: senhaAntiga
        },
        data: {
          login: login,
          senha: senhaNova
        },
      })
  }
    
}
  
  
export default RepositorioCredencialAcesso;


  
