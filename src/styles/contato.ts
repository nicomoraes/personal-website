import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  
  @media(max-width: ${({theme}) => theme.breakpoints.md}){
    flex-direction: column;
  }
`
export const Form = styled.form`
  width: max-content;
  height: max-content;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  
  //botão de envio
  button{
    width: 75%;
    margin-top: 5px;
  }
  
  @media(max-width: ${({theme}) => theme.breakpoints.sm}){
    padding: 10px 50px;
  }
`

export const FormTitle = styled.h1`
  font-size: ${({theme}) => theme.fontSize.medium.md_125};
  color: ${({theme}) => theme.colors.primary};
`

export const ContactList = styled.ul`
  width: max-content;
  display: flex;
  flex-direction: column;
  list-style: none;
  
  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.primary};
  }
  
    li {
      display: flex;
      align-items: center;
      font-weight: 500;
      padding: 10px;
      color: ${({theme}) => theme.fontColor.text};
      
      svg{
        color: ${({theme}) => theme.colors.primary};
        margin-right: 5px;
      }
    }
`
