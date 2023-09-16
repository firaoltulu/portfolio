import { Box, ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import LandingPage from "./LandingPage";
import DarkTheme from "./UI/DarkTheme";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import theme from './UI/Theme';

const getDesignTokens = (mode) => ({

  ...(mode === 'light' && {
    ...theme,
  }),
  ...(mode === 'dark' && {
    ...DarkTheme,
  }),

});


function App(props) {


  const [navvalue, setnavValue] = React.useState({ currentValue: 0, oldValue: 0 });
  const [tabclicked, settabclicked] = React.useState(false);


  const [mode, setMode] = React.useState('light');
  const [loc_theme, setloc_theme] = React.useState(theme);

  React.useEffect(() => {
    setloc_theme(createTheme(getDesignTokens(mode)));

  }, [mode]);

  const handlescroll = (event) => {
  }


  return (
    <ThemeProvider theme={loc_theme}>

      <CssBaseline>

        <Box className="grandparent" onScroll={(event) => { handlescroll(event) }} sx={{ minWidth: "375px", }}>

          <BrowserRouter>

            <Header setMode={setMode} navvalue={navvalue} setnavValue={setnavValue}
              tabclicked={tabclicked} settabclicked={settabclicked}></Header>

            <Box component="main"
              sx={{
                flexGrow: 1,
              }}
            >
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <LandingPage
                      {...props}
                      navvalue={navvalue}
                      setnavValue={setnavValue}
                      tabclicked={tabclicked}
                      settabclicked={settabclicked}
                    />
                  }
                />
              </Routes>

            </Box>

            <Footer navvalue={navvalue} setnavValue={setnavValue} />

          </BrowserRouter>

        </Box>

      </CssBaseline>

    </ThemeProvider>
  );
}

export default App;
