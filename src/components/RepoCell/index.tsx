import { useEffect, useState } from "react";
import Button from "../Button";
import { RepoDescription, RepoInfo, RepoName, RepositoryCell } from './styles';

interface RepoCellProps{
  cellID: number
  name: string
  description: string
  url: string
}

export function RepoCell({ cellID, name, description, url }: RepoCellProps) {
  const [animationLoading, setAnimationLoading] = useState<boolean>(true)

  useEffect(() => {
    const alreadyLoaded = localStorage.getItem("alreadyLoaded");

    if (alreadyLoaded === "true") {
      setAnimationLoading(false);
    }

    return () => {
      if (!alreadyLoaded) {
        localStorage.setItem("alreadyLoaded", "true");
        setAnimationLoading(false);
      } else [];
    }
  })

  return (
    <RepositoryCell delayTime={cellID} playAnimation={animationLoading}>
      <RepoInfo>
        <RepoName>{name}</RepoName>
        <RepoDescription>{description}</RepoDescription>
        <a href={url} target={"_blank"}>
          <Button text={"Acessar"} style_type="tertiary" />
        </a>
      </RepoInfo>
    </RepositoryCell>
  );
}