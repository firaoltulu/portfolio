import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Fab, ThemeProvider, Typography } from "@mui/material";
import { useTheme, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavigationIcon from '@mui/icons-material/Navigation';


import theme from './UI/Theme';
import DarkTheme from "./UI/DarkTheme";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import LandingPage from "./LandingPage";
import third from "./UI/Github/third";

const getDesignTokens = (mode) => ({

  ...(mode === 'light' && {
    ...theme,
  }),
  ...(mode === 'dark' && {
    ...DarkTheme,
  }),

});


function App(props) {

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const [navvalue, setnavValue] = React.useState({ currentValue: 0, oldValue: 0 });
  const [tabclicked, settabclicked] = React.useState(false);


  const [mode, setMode] = React.useState('light');
  const [loc_theme, setloc_theme] = React.useState(theme);

  React.useEffect(() => {
    setloc_theme(createTheme(getDesignTokens(mode)));

  }, [mode]);

  const handlescroll = (event) => {
    // console.log("is scrolling ");
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
                      setValue={setValue}
                      setSelectedIndex={setSelectedIndex}
                      tabclicked={tabclicked}
                      settabclicked={settabclicked}
                    />
                  }
                />
                {/* <Route
                  exact
                  path="/firaoltulu/alx-higher_level_programming"
                  element={
                    <third></third>
                  }
                /> */}
              </Routes>

            </Box>

            <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />

          </BrowserRouter>

        </Box>

      </CssBaseline>

    </ThemeProvider>
  );
}

export default App;
