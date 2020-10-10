import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--title);
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

    --menu-topside: #F9F9F9;
    --menu-botside: #C4C4C4;
    --menu-body: #D4D4D4;
    --menu-text: #767676;

    --input-background: #F9FDFE;
    --border: #E6E6F0;

    --text: #9C98A6;
    --title: #484848;
    --link : #FF72A8;

    --white: #FFF;
    --green: #2F95A3;
    --dark-green: #118696;

    --status-available: #09ffb5;
    --status-unavailable: #FF385C;
    --status-adopted: #9969FF;
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
