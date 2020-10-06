import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', sans-serif;
  }
  html {
    background: var(--white);
  }
  :root {

    font-size: 60%;
    --white: #FFF;
    --link : #FF72A8;
    --menubar-topside: #F9F9F9;
    --menubar-body: #D4D4D4;
    --menubar-botside: #C4C4C4;
    --text: #484848;
    --subtext: #9C98A6;
    --text-menu: #767676;
    --border: #E6E6F0;
    --input-background: #F9FDFE;
    --status-available: #09ffb5;
    --status-unavailable:#FF385C ;
    --status-adopted: #9969FF;
    --header-background: #2F95A3;
    --header-top-background: #118696;
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
