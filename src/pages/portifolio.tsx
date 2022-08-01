import { GetServerSideProps, NextPage } from 'next';
import { useCallback, useState } from "react";
import { RepoCell } from '../components/RepoCell';
import { useFetch } from "../hooks/useFetch";
import { Container, RepoContainer, Title } from '../styles/portifolio';

export const getServerSideProps: GetServerSideProps = async () => {
  const repo = await useFetch('https://api.github.com/users/nicomoraes/repos')
  return {
    props: {
      repo: repo
    },
  }
}

// @ts-ignore
const Portifolio: NextPage = ({ repo }) => {
  const [repos] = useState(repo)
  const favsRepository = ['calculadora-react', 'manager-task']

  const hasFavRepo = useCallback((obj: any) => {
    return favsRepository.includes(obj.name)
  }, [])

  return (
    <Container>
        <Title>Projetos pessoais</Title>
        <RepoContainer>
          {repos.filter(hasFavRepo).map((repository: any) => {
            return(
              <RepoCell
                  name={repository.name}
                  description={repository.description}
                  url={repository.html_url}
              />
            )
          })}
        </RepoContainer>
      </Container>
  )
}

export default Portifolio
