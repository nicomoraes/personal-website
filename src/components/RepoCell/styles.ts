import styled from "styled-components";

export const RepositoryCell = styled.div`
  margin: 20px 0;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 15px;
  padding: 20px;
  display: flex;
  box-shadow: -2px 2px 0 1px ${props => props.theme.colors.primary};
  width: 100%;
  a{
    text-decoration: none;
  }
`
export const RepoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
export const RepoName = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  font-size: ${({theme}) => theme.fontSize.medium.md_150};
`
export const RepoDescription = styled.p`
  font-weight: 400;
  color: ${props => props.theme.fontColor.text};
  line-break: normal;
  margin: 5px 0;
  text-align: justify;
` 