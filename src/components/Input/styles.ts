import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  padding: 5px;
  
  input {
    width: 400px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.primary};
    padding: 24px 16px 4px 16px;
    font-size: 16px;
    line-height: 1;
    outline: none;
    box-shadow: none;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    
    @media(max-width: ${props => props.theme.breakpoints.sm}){
      width: 250px;
    }
  }
  
  input:focus{
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
  }
  
  .isTextArea{
    height: 100px;
    word-wrap: break-word;
    word-break: break-all;
  }
  
  label{
    position: absolute;
    pointer-events: none;
    transform: translate(0, 23px) scale(1);
    transform-origin: top left;
    transition: 200ms ease 0ms;
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    left: 16px;
    top: 0;
  }
    
  &:focus-within label {
    transform: translate(0, 12px) scale(0.8);
    color: ${props => props.theme.colors.primary};
  }

  label.filled {
    transform: translate(0, 12px) scale(0.8);
  }
`