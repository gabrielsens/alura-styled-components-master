import React from "react";

import GlobalStyle from './Components/GlobalStyle'
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from './Components/Ui/temas';
import { BtnTema } from "./Components/Ui";
import SwitcherTema from "./Components/SwitcherTema";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema(prevState => !prevState);
  }
  return (
    <>
    <ThemeProvider theme={tema ? temaClaro : temaEscuro} >
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
    </>
  );
}

export default App;
