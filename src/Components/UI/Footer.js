import { Button, Grid, Hidden, IconButton, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(2),
        color: theme.palette.footer.main,
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: theme.palette.footer.main,
        },
    }),
);

const Footer = (props) => {

    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <footer>

            <Hidden smDown>
                <Grid container direction="row" justifyContent="space-between" rowSpacing={4} alignItems="center"
                    sx={{
                        position: "absolute",
                        padding: "1em",
                        backgroundColor: theme.palette.footer_two.main
                    }}>

                    <Grid item xs={12} sx={{ marginTop: "2em" }}>
                        <Typography variant="h3" color={theme.palette.footer.main} sx={{ textAlign: "center" }}>Firaol Tulu</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ marginBottom: "4em" }}>

                        <Grid container direction="row" justifyContent="center" >

                            <Grid item xs={2}><Button color="footer"><Typography variant="subtitle5">Home</Typography></Button></Grid>
                            <Grid item xs={2}><Button color="footer"><Typography variant="subtitle5">Service</Typography></Button></Grid>
                            <Grid item xs={2}><Button color="footer"><Typography variant="subtitle5">About</Typography></Button></Grid>
                            <Grid item xs={2}><Button color="footer"><Typography variant="subtitle5">Skills</Typography></Button></Grid>
                            <Grid item xs={2}><Button color="footer"><Typography variant="subtitle5">Experience</Typography></Button></Grid>
                            {/* <Grid item xs={2}><Button color="footer"><Typography variant="subtitle5">Testimonials</Typography></Button></Grid> */}
                            {/* <Grid item xs={2}><Button color="footer"><Typography variant="subtitle5">Portfolio</Typography></Button></Grid> */}
                            {/* <Grid item xs={2}><Button color="footer"><Typography variant="subtitle5">Contact</Typography></Button></Grid> */}

                        </Grid>

                    </Grid>

                    <Grid item xs={12} sx={{ marginBottom: "4em" }}>

                        <Grid container direction="row" justifyContent="center" >
                            <Grid item xs={1}>
                                <IconButton href="https://twitter.com/firaool5" target="_blank" color="footer" sx={{ border: "1px solid" }}>
                                    <TwitterIcon></TwitterIcon>
                                </IconButton>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton color="footer" sx={{ border: "1px solid" }}>
                                    <InstagramIcon></InstagramIcon>
                                </IconButton>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton href="https://www.linkedin.com/in/firaol-tulu-740962248" target="_blank" color="footer" sx={{ border: "1px solid" }}>
                                    <LinkedInIcon></LinkedInIcon>
                                </IconButton>

                            </Grid>
                            <Grid item xs={1}>
                                <IconButton href="https://github.com/firaoltulu" target="_blank" color="footer" sx={{ border: "1px solid" }}>
                                    <GitHubIcon></GitHubIcon>
                                </IconButton>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} sx={{}}>

                        <Typography variant="h6" color={theme.palette.footer.main} sx={{ textAlign: "center" }}>
                            Copyright 2023 Firaol Coder.
                            All Rights Reserved.
                        </Typography>

                    </Grid>

                </Grid>
            </Hidden>

            {matchesSM && <Grid container direction="row" justifyContent="space-between" rowSpacing={4} alignItems="center"
                sx={{
                    position: "absolute",
                    padding: "0em",
                    backgroundColor: theme.palette.footer_two.main
                }}>


                <Grid item xs={12} sx={{ marginTop: "1em" }}>
                    <Typography variant="h3" color={theme.palette.footer.main} sx={{ textAlign: "center" }}>Firaol Tulu</Typography>
                </Grid>


                <Grid item xs={12} alignItems={"right"} sx={{ marginBottom: "0em", alignItems: "center" }}>

                    <Grid container justifyContent="center" alignItems="center">

                        <Grid item xs={12}>
                            <StyledTabs
                                value={value}
                                onChange={handleChange}
                                aria-label="styled"
                                variant="scrollable"
                                scrollButtons={false}

                            >
                                <StyledTab label="Home" />
                                <StyledTab label="Service" />
                                <StyledTab label="About Me" />
                                <StyledTab label="Skills" />
                                <StyledTab label="Experience" />
                                <StyledTab label="Testimonial" />
                                <StyledTab label="Potfolio" />

                            </StyledTabs>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>}

        </footer>

    );

};

export default Footer;
