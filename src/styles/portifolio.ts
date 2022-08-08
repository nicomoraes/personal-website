import styled from 'styled-components'

export const Container = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30%;

  @media(max-width: ${({theme}) => theme.breakpoints.md}){
    padding: 10%;
  }
`
export const RepoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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


