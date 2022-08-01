import { FaArrowAltCircleRight } from "react-icons/fa";
import { PrimaryButton } from "../Button";
import { RepoDescription, RepoName, RepositoryCell } from './styles';

interface RepoCellProps{
  name: string
  description: string
  url: string
}

export function RepoCell({name, description, url}: RepoCellProps) {
  return (
      <RepositoryCell>
        <RepoName>{name}</RepoName>
        <RepoDescription>{description}</RepoDescription>
        <a href={url} target={'_blank'}>
          <PrimaryButton label={'Acessar'} icon={<FaArrowAltCircleRight size={20}/>}/>
        </a>
      </RepositoryCell>
  )
}