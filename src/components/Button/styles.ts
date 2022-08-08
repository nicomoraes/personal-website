import styled, { css } from 'styled-components';

export interface ButtonProps {
  style_type: 'primary' | 'secondary' | 'tertiary';
} 

export const StyledButton = styled.button<ButtonProps>`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 15px;
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  
  ${({style_type}) => style_type === 'primary' && css`
    background-color: ${({theme}) => theme.colors.primary};
  `}

  ${({style_type}) => style_type === 'secondary' && css`
    background-color: ${({theme}) => theme.colors.secondary};
  `}

  ${({style_type}) => style_type === 'tertiary' && css`
    background-color: transparent;
    color: ${({theme}) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.primary};

    &:hover{
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.background};
    transition: 0.85s;
    }
  `}

  svg{
    margin-left: 5px;
  }
  
  &:active {
    transform: scale(0.95);
  }
`