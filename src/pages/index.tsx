import type { NextPage } from 'next';
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact
} from 'react-icons/fa';
import {
  SiNextdotjs
} from 'react-icons/si';
import {
  Container,
  Description,
  Main,
  Role,
  SocialBox,
  Title
} from "../styles/home";

const Home: NextPage = () => {
  return (
    <Container>
      <Main>
        <Title>Nicolas Moraes</Title>

        <Role>Front-end Developer</Role>

        <Description>
          Estudante de Análise e Desenvolvimento de Sistemas - IFSC.
        </Description>
        <Description>
          <SiNextdotjs size={30}  color={'black'}/> Next.js
          <FaReact     size={30}  color={'#61DBFB'} /> React
          <FaHtml5     size={30}  color={'#F06529'} /> HTML5
          <FaCss3Alt   size={30}  color={'#3C99DC'} /> CSS3
        </Description>

        <SocialBox>
          <a href={'https://github.com/nicomoraes'} target={'_blank'}>
            <FaGithub />
          </a>
          <a href={'https://www.linkedin.com/in/nicolasmoraes-ti/'} target={'_blank'}>
            <FaLinkedin />
          </a>
        </SocialBox>
      </Main>
    </Container>
  )
}

export default Home
