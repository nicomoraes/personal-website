import { NextPage } from 'next';
import { RepoCell } from '../components/RepoCell';
import repositories, { RepositoryProps } from '../lib/repositories';
import { Container, RepoContainer, Title } from '../styles/portifolio';

const Portfolio: NextPage = () => {
  return (
    <Container>
      <Title>PROJETOS PESSOAIS</Title>
      <RepoContainer>
        {repositories.map((repository: RepositoryProps) => {
          return (
            <RepoCell
              key={repository.id}
              cellID={repository.id}
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

export default Portfolio
