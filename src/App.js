import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import { GlobalStyles } from './components/styles/Global';

const theme = {
  colors: {
    primary: "#8892b0",
    secondary: "#222",
    heading: "#ccd6f6",
    background: "#0a192f",
    textDecor: "#5ff1d0",
    hover: "#123040"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>

      <>
        <div className="App">
          <GlobalStyles />
          <Header />
          <Hero />
          {/* About me page */}
          {/* Experience */}
          {/* Projects */}
          {/* Contact */}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
