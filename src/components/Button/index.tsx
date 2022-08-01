import {ReactElement} from "react";
import {IconBaseProps, IconType} from "react-icons";
import { Primary, Secondary, Tertiary } from './styles'

interface ButtonProps {
  label: string
  icon?: ReactElement<IconType>
}

export function PrimaryButton({label, icon}: ButtonProps) {
  return (
    <Primary>
      {label} {icon}
    </Primary>
  )
}

export function SecondaryButton({label, icon}: ButtonProps) {
  return (
    <Secondary>
      {label} {icon}
    </Secondary>
  )
}

export function TertiaryButton({label, icon}: ButtonProps) {
  return (
    <Tertiary>
      {label} {icon}
    </Tertiary>
  )
}
