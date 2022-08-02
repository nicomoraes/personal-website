import styled from 'styled-components'

export const Container = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 100px;

  @media(max-width: ${({theme}) => theme.breakpoints.md}){
    padding: 0;
  }
`
export const RepoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
  align-items: baseline;
  justify-content: baseline;  
  margin-top: 10px;
  padding: 30px 200px;
  
  border-radius: 15px;
  background-color: ${({theme}) => theme.colors.secondary}50;

  @media(max-width: ${({theme}) => theme.breakpoints.md}){
    width: 80%;
    padding: 50px 50px;
  }
  @media(max-width: ${({theme}) => theme.breakpoints.sm}){
    width: 95%;
    align-items: center;
    justify-content: center;
  }
`
export const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 100px;
  font-size: ${({theme}) => theme.fontSize.large.lg_300};
  color: ${({theme}) => theme.colors.primary};
  text-shadow: 1px 1px 1px ${({theme}) => theme.colors.tertiary};
  @media(max-width: ${({theme}) => theme.breakpoints.md}){
    font-size: ${({theme}) => theme.fontSize.large.lg_300};
  }
  @media(max-width: ${({theme}) => theme.breakpoints.md}){
    font-size: ${({theme}) => theme.fontSize.large.lg_200};
  }
`


