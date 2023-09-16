import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import ContactsIcon from '@mui/icons-material/Contacts';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkIcon from '@mui/icons-material/Work';
import { Grid, Tab, Tabs } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';


const StyledTabs = styled((props) => <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
/>)(({ theme }) => ({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        // maxWidth: 40,
        width: '80%',
        innerHeight: 40,
        outerHeight: 40,
        backgroundColor: theme.palette.buttons1.dark,
    },
}),
);


const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    // marginRight: theme.spacing(1),
    color: theme.palette.buttons1.main,
    '&.Mui-selected': {
        color: theme.palette.buttons1.light,
    },
    '&.Mui-focusVisible': {
        backgroundColor: theme.palette.buttons1.main,
    },
}),
);

const drawerWidth = "100%";
const navItems = ['  Home  ', 'Services ', '  About ', '  Skills ', 'Experience', 'Testimonials', 'portfolio', 'Contact '];


function Header(props) {


    const { window, setMode, navvalue, setnavValue, settabclicked } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const theme = useTheme();

    const toggleColorMode = () => {
        if (theme.palette.mode === 'light') {
            console.log("dark mode");
            setMode("dark");
        }
        else {
            setMode("light");
            console.log("light mode");

        }

    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleChange = (event, newValue) => {
        setnavValue({ currentValue: newValue, oldValue: navvalue.currentValue });
    };


    const drawer = (
        <Box sx={{ minWidth: "375px", textAlign: 'center' }}>

            <Grid container direction="row" justifyContent="space-between" rowSpacing={3} columnSpacing={1} alignItems="center"
                sx={{
                    marginTop: "8em",
                    padding: "1em",
                }}>
                {navItems.map((item, index) => {
                    return (

                        <Grid item xs={6} sx={{}} key={`drwaer-list-index-${index}`}>

                            <Button color="header" variant='contained' sx={{ width: "150px", padding: "1em", border: "1px solid", borderRadius: "1em" }}
                                onClick={(event) => { handleChange(event, index); handleDrawerToggle(); }}>
                                <Grid container direction="column" alignItems="center">
                                    <Grid item xs={12}>
                                        {(index === 0 ? <HomeIcon></HomeIcon> : "")}
                                        {(index === 1 ? <WorkIcon></WorkIcon> : "")}
                                        {(index === 2 ? <PersonOutlineOutlinedIcon ></PersonOutlineOutlinedIcon> : "")}
                                        {(index === 3 ? <MilitaryTechIcon ></MilitaryTechIcon> : "")}
                                        {(index === 4 ? <SchoolOutlinedIcon ></SchoolOutlinedIcon> : "")}
                                        {(index === 5 ? <MessageOutlinedIcon ></MessageOutlinedIcon> : "")}
                                        {(index === 6 ? <FilterNoneIcon></FilterNoneIcon> : "")}
                                        {(index === 7 ? <ContactsIcon></ContactsIcon> : "")}

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle5">{item}</Typography>
                                    </Grid>

                                </Grid>

                            </Button>

                        </Grid>

                    );

                })}

            </Grid>

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', minWidth: "375px" }}>

            <AppBar component="nav" color="primary" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>

                <Toolbar color={"primary"}>

                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                    >
                        Firaol.
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>

                        <StyledTabs
                            value={navvalue.currentValue}
                            onChange={handleChange}
                            aria-label="styled"
                            variant="scrollable"
                            scrollButtons={false}
                        >
                            {navItems.map((item, index) => (
                                <StyledTab key={item} label={item} onClick={(event) => { settabclicked(true) }} />
                            ))}
                        </StyledTabs>

                    </Box>

                    <IconButton sx={{ ml: 1, mr: "1em", display: { xs: 'block', md: 'block' } }} onClick={toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>

                    {<IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, ml: "1em", marginLeft: "auto", display: { md: 'none' } }}
                    >
                        {!mobileOpen ? <MenuIcon /> : <CloseIcon />}
                    </IconButton>}

                </Toolbar>

            </AppBar>

            <nav>
                <Drawer

                    anchor="right"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

            <Box component="main" sx={{
                ...theme.mixins.toolbar,
            }}>
            </Box>

        </Box>

    );
}

export default Header;