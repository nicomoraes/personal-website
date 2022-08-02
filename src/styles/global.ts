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
   
   body::-webkit-scrollbar {
      width: 12px;               /* width of the entire scrollbar */
   }

   body::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.primary};    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
   }
   
   button, input {
    outline: none;
    border: none;
   }

   button {
    cursor: pointer;
   }
`;