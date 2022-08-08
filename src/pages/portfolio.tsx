import { NextPage } from 'next';
import { RepoCell } from '../components/RepoCell';
import repositories, { RepositoryProps } from '../lib/repositories';
import { Container, RepoContainer, Title } from '../styles/portifolio';

const Portifolio: NextPage = () => {
  return (
    <Container>
        <Title>Projetos pessoais</Title>
        <RepoContainer>
          {repositories.map((repository: RepositoryProps) => {
            return(
              <RepoCell
                  name={repository.name}
                  description={repository.description}
                  url={repository.url}
              />
            )
          })}
        </RepoContainer>
      </Container>
  )
}

export default Portifolio
