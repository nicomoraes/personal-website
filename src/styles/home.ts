import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: max-content;
  justify-content: center;
  align-items: center;
`

const animatedText = keyframes`
  to{
    background-position: 100%; 
  }
`
export const Title = styled.h1`
  width: max-content;

  font-size: ${({ theme }) => theme.fontSize.extra_large.ex_700};
  text-align: center;
  color: transparent;

  background-image: linear-gradient(
    to right, 
    ${props => (props.theme.colors.tertiary)},
    ${props => (props.theme.colors.primary)},
    ${props => (props.theme.colors.secondary)}
  );
  background-clip: text; 
  -webkit-background-clip: text; 
  background-size: 300%;
  background-position: -100%;  
  
  animation: ${animatedText} 7s infinite alternate;

  @media(max-width: ${({ theme }) => theme.breakpoints.md}){
    font-size: ${({ theme }) => theme.fontSize.large.lg_400};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.sm}){
    font-size: ${({ theme }) => theme.fontSize.large.lg_300};
  }
`
export const Role = styled.span`
  width: max-content;
  margin: 10px 0 30px;
  padding: 10px;
  border-radius: 15px;

  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSize.large.lg_300};
  background: ${({ theme }) => theme.colors.secondary};
  text-align: center;

  background-image: linear-gradient(
    to right, 
    ${props => (props.theme.colors.secondary)},
    ${props => (props.theme.colors.primary)}
  );

  @media(max-width: ${({ theme }) => theme.breakpoints.md}){
    font-size: ${({ theme }) => theme.fontSize.large.lg_200};
  }
`
export const Description = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  
  max-width: 100%;
  word-break:  break-word;
  text-align: center;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.medium.md_125};
  color: ${({ theme }) => theme.colors.primary};
  
  & + & {
    margin-top: 20px;
  } 

  svg{
    margin: 0 5px 0 20px;
  }
  
  @media(max-width: ${({ theme }) => theme.breakpoints.md}){
    font-size: ${({ theme }) => theme.fontSize.medium.md_100};
    
    & + & {
      font-size: ${({ theme }) => theme.fontSize.small.sm_075};
    }
    
    svg:nth-child(1){
      margin-left: 0;
    }
  }
`

export const SocialBox = styled.div`
  width: max-content;
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  
  a{
    & + a {
      margin-left: 20px;
    }
    
    color: ${({ theme }) => theme.colors.primary};
    
    svg {
      width: 30px;
      height: 30px;
      cursor: pointer;
   }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.sm}){
      width: 100%;
      a{
        margin: 0 100px;
      }
    }
  }
`



