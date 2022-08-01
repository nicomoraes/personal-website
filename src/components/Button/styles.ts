import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 15px;
  color: ${props => props.theme.colors.background};
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  
  svg{
    margin-left: 5px;
  }
  
  &:active {
    transform: scale(0.95);
  }
`

export const Primary = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
`;

export const Secondary = styled(Button)`
  background-color: ${props => props.theme.colors.secondary};
`;

export const Tertiary = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  
  &:hover{
    background-color: ${props => props.theme.colors.secondary};
    transition: 0.9s;
  }
`;
