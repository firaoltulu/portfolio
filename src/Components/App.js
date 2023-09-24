import { Box, CircularProgress, Grid, ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import LandingPage from "./LandingPage";
import DarkTheme from "./UI/DarkTheme";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import theme from './UI/Theme';
import { modeStorageGet, modeStorageSet } from "../Libraries/localstorage";

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


  const [mode, setMode] = React.useState('');
  const [loc_theme, setloc_theme] = React.useState(theme);

  const [waitloading, setwaitloading] = React.useState(true);

  React.useEffect(() => {

    const mode = modeStorageGet();
    if (mode) {
      setMode(mode.Type);

    }
    else {
      setMode('light');
    }

  }, []);


  React.useEffect(() => {

    if (mode !== '') {

      const newobj = {
        Title: mode,
        Type: mode,
      };

      modeStorageSet(newobj);

      setloc_theme(createTheme(getDesignTokens(mode)));
      setwaitloading(false);

    }
    else {
      setwaitloading(true);

    }

  }, [mode]);

  const handlescroll = (event) => {
  }


  return (
    <ThemeProvider theme={loc_theme}>

      <CssBaseline>

        {!waitloading && <Box className="grandparent" onScroll={(event) => { handlescroll(event) }}
          sx={{
            minWidth: "375px",
          }}>

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

        </Box>}

        {waitloading && <Box className="grandparent" sx={{ minWidth: "375px", marginTop: "4em" }}>
          <Grid container justifyContent={"center"} alignItems={"center"} >
            <CircularProgress color="inherit" sx={{ height: "20em" }} />
          </Grid>
        </Box>
        }

      </CssBaseline >

    </ThemeProvider >
  );
}

export default App;
