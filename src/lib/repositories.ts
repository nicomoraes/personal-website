export interface RepositoryProps {
  name: string,
  description: string,
  url: string
}

 const repositories: RepositoryProps[] = [
  {
    name: 'Gerenciador de Tarefas',
    description: 'Desenvolvido com o Framework Next.js e tem como armazenamendo o banco de dados MongoDB. Permite a adição, exclusão e edição de tarefas. Mantèm os dados atualizados utilizando a biblioteca SWR.',
    url: 'https://github.com/nicomoraes/manager-task'
  },
  {
    name: 'Site pessoal',
    description: 'O site que você acessa no atual momento. É construido com Next.js + typescript e utiliza a biblioteca styled-components para estilização.',
    url: 'https://github.com/nicomoraes/personal-website'
  },
  {
    name: 'IFSC',
    description: 'Repositório que contém uma série de projetos desenvolvimentos durante minha formação em Análise e Desenvolvimento de Sistemas no Instituto Federal de Santa Catarina',
    url: 'https://github.com/nicomoraes/ifsc-projects'
  }
]

export default repositories;