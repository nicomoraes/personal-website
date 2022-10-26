export interface RepositoryProps {
  id: number
  name: string,
  description: string,
  url: string
}

 const repositories: RepositoryProps[] = [
  {
    id: 1,
    name: 'Gerenciador de Tarefas',
    description: 'Foi desenvolvido com o Framework Next.js + banco de dados MongoDB. Permite a adição, exclusão e edição de tarefas. Mantèm os dados atualizados entre o cliente e o banco de dados utilizando a biblioteca SWR.',
    url: 'https://github.com/nicomoraes/manager-task'
  },
  {
    id: 2,
    name: 'Site pessoal',
    description: 'O site que você acessa no atual momento. É construido com Next.js + Typescript e utiliza a biblioteca styled-components para estilização.',
    url: 'https://github.com/nicomoraes/personal-website'
  },
  {
    id: 3,
    name: 'IFSC',
    description: 'Repositório que contém uma série de projetos desenvolvidos durante minha formação em Análise e Desenvolvimento de Sistemas no Instituto Federal de Santa Catarina.',
    url: 'https://github.com/nicomoraes/ifsc-projects'
  }
]

export default repositories;