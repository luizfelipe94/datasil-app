import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;

      ::-webkit-scrollbar-track {
          background-color: transparent;
      }

      ::-webkit-scrollbar {
          width: 0.5vh;
          height: 0.5vh;
          background: transparent;
      }

      ::-webkit-scrollbar-thumb {
          background: #CCCCCC;
          border-radius: 0.5rem;
          border: 0rem solid #A1A;
          box-shadow: none;
      }
  }

  html, body, #root {
      background-color: var(--bg-default, #f4f3f7);
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      min-height: 100vh;
      position: relative;
  }

  body {
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale !important;
  }

  button {
      cursor: pointer;
      border: 0;
      box-shadow: 0px;
      background-color: transparent;
  }
`;
