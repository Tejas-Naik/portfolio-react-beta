import { ThemeProvider } from 'styled-components';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { GlobalStyles } from './components/styles/Global';

const theme = {
  colors: {
    primary: "#8892b0",
    secondary: "#222",
    heading: "#ccd6f6",
    background: "#0a192f",
    textDecor: "#5ff1d0",
    hover: "#123040",
    link: "#a8b2d1",
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
          <About />
          <Projects />
          {/* Experience */}
          {/* Projects */}
          {/* Contact */}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
