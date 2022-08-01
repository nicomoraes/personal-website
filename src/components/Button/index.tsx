import { Primary, Secondary, Tertiary } from './styles';

interface ButtonProps {
  text: string
}

export function PrimaryButton({text}: ButtonProps) {
  return (
    <Primary>
      {text}
    </Primary>
  )
}

export function SecondaryButton({text}: ButtonProps) {
  return (
    <Secondary>
      {text}
    </Secondary>
  )
}

export function TertiaryButton({text}: ButtonProps) {
  return (
    <Tertiary>
      {text}
    </Tertiary>
  )
}
