import { ButtonProps, StyledButton } from './styles';

interface Props {
  text: string
  style_type: ButtonProps['style_type']
}

const Button : React.FC<Props> = ({text, style_type}) => {
  return (
    <StyledButton style_type={style_type}>
      {text}
    </StyledButton>
  )
}

export default Button;
