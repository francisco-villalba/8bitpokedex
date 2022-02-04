import GlobalStyle from "./components/GlobalStyle";
import Navigation from "./components/Navigation";
import Pokedex from "./components/Pokedex";
import Screen from "./components/Screen";
import Webfont from 'webfontloader';

Webfont.load({
  custom: {
    families: ["8bit"]
  }
})

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Pokedex>
          <Screen />
          <Navigation />
        </Pokedex>
      </div>
    </>
  );
}

export default App;
