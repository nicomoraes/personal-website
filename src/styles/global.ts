import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   body { 
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 300;
    background-color: ${props => props.theme.colors.background};
   }
   
   button, input {
    outline: none;
    border: none;
   }

   button {
    cursor: pointer;
   }
`;