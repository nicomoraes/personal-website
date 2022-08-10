import Button from "../Button";
import { RepoDescription, RepoInfo, RepoName, RepositoryCell } from './styles';

interface RepoCellProps{
  cellID: number
  name: string
  description: string
  url: string
}

export function RepoCell({cellID, name, description, url}: RepoCellProps) {
  return (
      <RepositoryCell delayTime={cellID}>
        <RepoInfo>
          <RepoName>{name}</RepoName>
          <RepoDescription>{description}</RepoDescription>
          <a href={url} target={'_blank'}>
            <Button text={'Acessar'} style_type='tertiary'/>
          </a>
        </RepoInfo>
      </RepositoryCell>
  )
}