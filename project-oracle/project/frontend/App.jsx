import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {render} from 'react-dom';
import Reboot from 'material-ui/Reboot';
import {createMuiTheme} from 'material-ui/styles';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Main from "./pages/Main";
import "./styles/main.scss"
import "react-billboardjs/lib/billboard.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5e7ce8',
      main: '#365fb5',
      dark: '#1a5284',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
      <div>
        <Reboot/>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <Main/>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
  );
}

render(<App/>, document.querySelector('#app'));