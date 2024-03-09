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

}
  
  
export default RepositorioCredencialAcesso;


  
