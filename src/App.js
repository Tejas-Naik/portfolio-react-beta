import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header';

const theme = {
  colors: {
    primary: "#111",
    secondary: "#222",
    background: "#0a192f",
    textDecor: "#5ff1d0"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>

      <>
        <div className="App">
          <Header />
          {/* Landing page */}
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
