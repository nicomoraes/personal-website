import { GetServerSideProps, NextPage } from 'next';
import { useState } from "react";
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

interface RepositoryProps {
  name: string
  description: string
  html_url: string
}

// @ts-ignore
const Portifolio: NextPage = ({ repo }) => {
  const [repos] = useState<RepositoryProps[]>(repo)
  const favsRepository = ['calculadora-react', 'manager-task', 'personal-website', 'ifsc-projects']

  const filteredRepo = repos.filter(r => favsRepository.includes(r.name));

  return (
    <Container>
        <Title>Projetos pessoais</Title>
        <RepoContainer>
          {filteredRepo.map((repository: RepositoryProps) => {
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
