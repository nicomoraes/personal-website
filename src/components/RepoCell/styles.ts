import styled, { keyframes } from "styled-components";

const cellAnimation = keyframes`
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
`
type CellProps = {
  delayTime: number //In seconds
}

export const RepositoryCell = styled.div<CellProps>`
  display: flex;
  margin: 20px 0;
  padding: 20px;
  width: 100%;

  background-color: ${props => props.theme.colors.secondary};
  border-radius: 15px;
  opacity: 0;
  border: 1px solid ${({theme}) => theme.colors.primary};
  animation: ${cellAnimation} 4s;
  animation-delay: ${props => props.delayTime}s;
  animation-fill-mode: forwards;
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
  text-align: justify;
  margin: 8px 0 20px 0;
` 