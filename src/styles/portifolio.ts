import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20%;

  @media(max-width: ${({theme}) => theme.breakpoints.md}){
    padding: 0 10%;
  }
`
export const RepoContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const titleAnimation = keyframes`
  from { opacity: 0;}
  to   { opacity: 1;}
`
export const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  font-size: ${({theme}) => theme.fontSize.large.lg_300};
  color: ${({theme})=> theme.colors.primary};
  animation: ${titleAnimation} 4s 1s forwards;
  opacity: 0;
  @media(max-width: ${({theme}) => theme.breakpoints.md}){
    font-size: ${({theme}) => theme.fontSize.large.lg_300};
  }

  @media(max-width: ${({theme}) => theme.breakpoints.sm}){
    margin-top: 0;
    font-size: ${({theme}) => theme.fontSize.large.lg_200};
  }
`


