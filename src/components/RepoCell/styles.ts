import styled from "styled-components";

export const RepositoryCell = styled.div`
  width: 100%;
  height: 170px;
  margin: 20px 0;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: -2px 2px 0 1px ${props => props.theme.colors.primary};
  
  a{
    text-decoration: none;
  }
  
  &:hover{
    background-color: ${props => props.theme.colors.secondary}50;
  }
`

export const RepoName = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
`

export const RepoDescription = styled.p`
  font-weight: 400;
  color: ${props => props.theme.fontColor.text};
  margin: 5px 0 20px 0;
` 