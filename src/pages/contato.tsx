import emailjs from 'emailjs-com';
import type { NextPage } from 'next';
import { FormEvent, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from "../components/Button/";
import Input from "../components/Input";
import {
  ContactList,
  Container,
  Form, FormResponse, FormTitle
} from '../styles/contato';

//@ts-ignore
const Contato: NextPage = ({ service, template, userid }) => {
  const [message, setMessage] = useState<string>('')
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  function sendEmail(e: FormEvent) {
    e.preventDefault()

    emailjs.sendForm(service, template, formRef.current, userid)
      .then((response) => {
        formRef.current.reset();
        setMessage(`${response.text}`)
      }, (error) => {
        setMessage(`${error.text}`)
      });
  }

  return (
    <Container>
      <ContactList>
        <li><FaEnvelope size={30} /> nicolasmoraeslsilva@gmail.com</li>
        <a href='https://www.linkedin.com/in/nicolasmoraes-ti/' target={'_blank'}>
          <li><FaLinkedin size={30} /> Nicolas Moraes</li>
        </a>
        <a href='https://github.com/nicomoraes' target={'_blank'}>
          <li><FaGithub size={30} /> nicomoraes</li>
        </a>
      </ContactList>

      <Form ref={formRef} autoComplete={'off'} onSubmit={sendEmail}>
        <FormTitle>Contate-me</FormTitle>
        {message && 
          <FormResponse message={message}>
            {message === 'OK' ? 'Email enviado com sucesso!' : 'Erro ao enviar o email!'}
          </FormResponse>
        }
        <Input type={'text'}  name={'name'} label={'Nome'} required/>
        <Input type={'email'} name={'email'} label={'E-mail'} required/>
        <Input type={'text'}  name={'subject'} label={'Assunto'} required/>
        <Input type={'textarea'} name={'message'}  label={'Descrição'} required/>
        <Button text={'Enviar'} style_type='tertiary' />
      </Form>
    </Container>
  )
}

export default Contato

export const getServerSideProps = async () => {
  return {
    props: {
      service: process.env.SERVICE_ID,
      template: process.env.TEMPLATE_ID,
      userid: process.env.USER_ID,
    },
  }
}