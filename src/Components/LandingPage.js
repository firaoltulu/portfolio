import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LaunchIcon from '@mui/icons-material/Launch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import {
    Alert,
    Avatar, Box, Button, Card,
    CardContent, CardHeader,
    CardMedia,
    Dialog,
    DialogContent,
    Fade,
    Grid, IconButton, LinearProgress, Pagination, Paper, Slide, Snackbar, TextField,
    Typography,
    useMediaQuery
} from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';


import bootstrapicon from "../Assets/bootstrapicon.png";
import cicon from "../Assets/c#icon.png";
import cssicon from "../Assets/cssicon.png";
import htmlicon from "../Assets/htmlicon.png";
import javaicon from "../Assets/javaicon.png";
import javascripticon from "../Assets/javascripticon.png";
import materialuiicon from "../Assets/materialuiicon.png";
import mongodbicon from "../Assets/mongodbicon.png";
import mysqlicon from "../Assets/mysqlicon.png";
import netframeworkicon from "../Assets/netframeworkicon.png";
import nodejsicon from "../Assets/nodejsicon.png";
import phpicon from "../Assets/phpicon.png";
import portfolio_one from "../Assets/portfolio_one.png";
import portfolio_one_big from "../Assets/portfolio_one_big.png";
import portfolio_three from "../Assets/portfolio_three.png";
import portfolio_three_big from "../Assets/portfolio_three_big.png";
import portfolio_two from "../Assets/portfolio_two.png";
import portfolio_two_big from "../Assets/portfolio_two_big.png";
import pythonicon from "../Assets/pythonicon.png";
import reacticon from "../Assets/reacticon.png";
import myphoto_one from "../Assets/myphoto_one.png";
import myphoto_two from "../Assets/myphoto_two.png";

const Testimonials = [
    {
        id: 1,
        name: "Gadisa H",
        title: "Public relations",
        message: " You possesses excellent problem-solving skills, consistently finding elegant solutions to complex technical challenges. Your deep understanding of JavaScript, React, and CSS has allowed them to deliver seamless user experiences."
    },
    {
        id: 2,
        name: "Habtamu T",
        title: "Dupty General Manager",
        message: "U have shown consistently exhibited a profound understanding of Next.js and its core principles From the initial project kick-off to the final deployment.",
    },
    {
        id: 3,
        name: "Eliya M",
        title: "Network & Infrastructure Engineer II",
        message: "On a personal note, an absolute pleasure to work with. your positive attitude, exceptional teamwork, and willingness to go the extra mile have made our working relationship truly enjoyable.",
    },
    {
        id: 4,
        name: "Endale C",
        title: "Project Manager",
        message: "it is without reservation that I highly recommend you for any organization seeking a skilled and experienced BackEnd developer.",
    },
    {
        id: 5,
        name: "Bahiru H",
        title: "Department Head",
        message: "Throughout our collaboration, I have been thoroughly impressed by your diligence and professionalism. They consistently adhere to project deadlines and effectively communicate progress updates, keeping the team informed and involved throughout.Tnx u..",
    },
    {
        id: 6,
        name: "Mikiyas H",
        title: "Software Developer & system adminstrator",
        message: "Working alongside U, I have witnessed your ability to design and implement efficient, well-structured APIs that seamlessly connect front-end systems with databases and other essential services.",
    },
    {
        id: 7,
        name: "Workye L",
        title: "Backend Developer",
        message: "You is a true master of this craft.Tnx u so much.",
    },
    {
        id: 8,
        name: "Hafiza M",
        title: "System Technical",
        message: "In addition to Your technical competence, U are highly dependable and collaborative team player. u consistently communicate project progress effectively, ensuring that the entire team is up to date and aligned.",
    },
    {
        id: 9,
        name: "Tewdros W",
        title: "HR",
        message: "You demonstrates strong leadership qualities, often taking initiative to mentor and guide other team members. Your willingness to share knowledge and provide guidance has not only contributed to the growth of your colleagues but also fostered a positive and collaborative team environment.",
    },

];

const portfolio = [
    {
        id: 1,
        title: "Course Review",
        message: "This is a page where students can find honest and informative reviews about the courses offered on the e-learning platform.",
        portfolio_image: portfolio_one_big,
        link: "https://github.com/firaoltulu/Utopia"
    },
    {
        id: 2,
        title: "Admin Side Course List",
        message: "This site administrator's course list page acts as a central control panel, empowering administrators with the tools and insights needed to effectively manage the course offerings on the website.",
        portfolio_image: portfolio_two_big,
        link: "https://github.com/firaoltulu/Utopia"
    },
    {
        id: 3,
        title: "Client Course List",
        message: "The course list page presents courses in a visually appealing and intuitive manner, typically consisting of a grid or list layout. Each course listing includes key information such as the course title, description, instructor details, duration, difficulty level, and user ratings.",
        portfolio_image: portfolio_three_big,
        link: "https://github.com/firaoltulu/Utopia"
    },
];

const Gridcustom = styled((props) => {
    return <Grid {...props}></Grid>;
})(({ theme }) => ({
    "&:hover": {
        transform: "scale(1.08)",
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.standard,
        }),
    },
}));

const Gridcustomone = styled((props) => {
    return <Grid {...props}></Grid>;
})(({ theme }) => ({
    "&:hover": {
        transform: "scale(1.01)",
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.standard,
        }),
    },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({

    '& .MuiDialog-paper': {
        borderRadius: "1em",
        backgroundColor: theme.palette.Dialog.main,
    },
    '& .MuiDialog-scrollPaper': {
        backgroundColor: "aqua",
        backgroundColor: "rgba(0, 0, 0, .75)",
    },
    '& .MuiDialogTitle-root': {
        ...theme.typography.estimate,
    },
    '& .MuiDialogContent-root': {
        border: "0px",
        // borderColor: theme.palette.Dialog.border,
        padding: theme.spacing(0),

    },
    '& .MuiDialogActions-root': {

        // backgroundColor: theme.palette.portfolio_one.main,
        padding: theme.spacing(1),
    },
}));


function LandingPage(props) {

    const { navvalue, setnavValue, tabclicked, settabclicked } = props;

    const contactref = useRef(null);
    const servicesref = useRef(null);
    const aboutref = useRef(null);
    const skillref = useRef(null);
    const experienceref = useRef(null);
    const Testimonialsref = useRef(null);
    const Portfolio_cardref = useRef(null);
    const contactone_ref = useRef(null);

    const navigate = useNavigate();

    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));


    const [yearsexper, setyearsexper] = React.useState(0);
    const [porjectcomp, setporjectcomp] = React.useState(0);
    const [happyclie, sethappyclie] = React.useState(0);

    const [testimonialpage, settestimonialpage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const [emptyRows, setemptyRows] = React.useState(0);

    const [portfolio_one_show, setportfolio_one_show] = React.useState(false);
    const [portfolio_two_show, setportfolio_two_show] = React.useState(false);
    const [portfolio_three_show, setportfolio_three_show] = React.useState(false);


    const [service_one_show, setservice_one_show] = React.useState(false);
    const [service_two_show, setservice_two_show] = React.useState(false);
    const [service_three_show, setservice_three_show] = React.useState(false);
    const [service_four_show, setservice_four_show] = React.useState(false);
    const [About_me_show, setAbout_me_show] = React.useState(false);


    const [contactslide, setcontactslide] = React.useState(false);
    const [serviceslide, setserviceslide] = React.useState(false);
    const [aboutslide, setaboutslide] = React.useState(false);
    const [skillslide, setskillslide] = React.useState(false);
    const [experienceslide, setexperienceslide] = React.useState(false);
    const [testimonialslide, settestimonialslide] = React.useState(false);
    const [portfolioslide, setportfolioslide] = React.useState(false);
    const [contactlastslide, setcontactlastslide] = React.useState(false);

    const [checkingif, setcheckingif] = React.useState({});
    const [currentval, setcurrentval] = React.useState(0);

    const [opendialog, setopendialog] = React.useState({ open: false, Portfolio_Index: 0 });

    const [contactname, setcontactname] = React.useState("");
    const [contactemail, setcontactemail] = React.useState("");
    const [contactmessage, setcontactmessage] = React.useState("");

    const [open_contactme_success, setopen_contactme_success] = React.useState(false);
    const [open_contactme_error_one, setopen_contactme_error_one] = React.useState(false);
    const [open_contactme_error_two, setopen_contactme_error_two] = React.useState(false);


    const [progresson, setprogresson] = React.useState(false);


    const useIsInViewport = (ref) => {
        const [isIntersecting, setIsIntersecting] = useState(false);

        const observer = React.useMemo(
            () =>
                new IntersectionObserver(([entry]) =>
                    setIsIntersecting(entry.isIntersecting),
                ),
            [],
        );

        useEffect(() => {
            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            };
        }, [ref, observer]);

        return isIntersecting;

    };

    const contactinview = useIsInViewport(contactref);
    const serviceinview = useIsInViewport(servicesref);
    const aboutinview = useIsInViewport(aboutref);
    const skillinview = useIsInViewport(skillref);
    const experienceinview = useIsInViewport(experienceref);
    const Testimonialinview = useIsInViewport(Testimonialsref);
    const portfolioinview = useIsInViewport(Portfolio_cardref);
    const contactlastinview = useIsInViewport(contactone_ref);

    React.useEffect(() => {
        if (navvalue.currentValue === 0) {
            window.scrollTo({
                top: contactref.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });

        }
        else if (navvalue.currentValue === 1) {
            window.scrollTo({
                top: servicesref.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });

        }
        else if (navvalue.currentValue === 2) {
            window.scrollTo({
                top: aboutref.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
        else if (navvalue.currentValue === 3) {
            window.scrollTo({
                top: skillref.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
        else if (navvalue.currentValue === 4) {
            window.scrollTo({
                top: experienceref.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
        else if (navvalue.currentValue === 5) {
            window.scrollTo({
                top: Testimonialsref.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
        else if (navvalue.currentValue === 6) {
            window.scrollTo({
                top: Portfolio_cardref.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
        else if (navvalue.currentValue === 7) {
            window.scrollTo({
                top: contactone_ref.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
        else {

        }

    }, [navvalue]);

    React.useEffect(() => {

        try {

            if (contactinview) {
                setcontactslide(true);
                setserviceslide(false);
                setaboutslide(false);
                setskillslide(false);
                setexperienceslide(false);
                settestimonialslide(false);
                setportfolioslide(false);
                setcontactlastslide(false);

            }
            else if (serviceinview) {
                setserviceslide(true);
                setcontactslide(false);
                setaboutslide(false);
                setskillslide(false);
                setexperienceslide(false);
                settestimonialslide(false);
                setportfolioslide(false);
                setcontactlastslide(false);
            }
            else if (aboutinview) {
                setaboutslide(true);
                setcontactslide(false);
                setserviceslide(false);
                setskillslide(false);
                setexperienceslide(false);
                settestimonialslide(false);
                setportfolioslide(false);
                setcontactlastslide(false);
            }
            else if (skillinview) {
                setskillslide(true);
                setcontactslide(false);
                setserviceslide(false);
                setaboutslide(false);
                setexperienceslide(false);
                settestimonialslide(false);
                setportfolioslide(false);
                setcontactlastslide(false);
            }
            else if (experienceinview) {
                setexperienceslide(true);
                setcontactslide(false);
                setserviceslide(false);
                setaboutslide(false);
                setskillslide(false);
                settestimonialslide(false);
                setportfolioslide(false);
                setcontactlastslide(false);
            }
            else if (Testimonialinview) {
                settestimonialslide(true);
                setcontactslide(false);
                setserviceslide(false);
                setaboutslide(false);
                setskillslide(false);
                setexperienceslide(false);
                setportfolioslide(false);
                setcontactlastslide(false);
            }
            else if (portfolioinview) {
                setportfolioslide(true);
                setcontactslide(false);
                setserviceslide(false);
                setaboutslide(false);
                setskillslide(false);
                setexperienceslide(false);
                settestimonialslide(false);
                setcontactlastslide(false);
            }
            else if (contactlastinview) {
                setcontactlastslide(true);
                setcontactslide(false);
                setserviceslide(false);
                setaboutslide(false);
                setskillslide(false);
                setexperienceslide(false);
                settestimonialslide(false);
                setportfolioslide(false);
            }
            else {

                setcontactslide(false);
                setserviceslide(false);
                setaboutslide(false);
                setskillslide(false);
                setexperienceslide(false);
                settestimonialslide(false);
                setportfolioslide(false);
                setcontactlastslide(false);
            }

        } catch (error) {

        }

    }, [contactinview, serviceinview, aboutinview, skillinview, experienceinview, Testimonialinview, portfolioinview, contactlastinview]);


    // React.useEffect(() => {

    //     try {

    //         // if (navvalue.currentValue - navvalue.oldValue === -1 ||
    //         //     navvalue.currentValue - navvalue.oldValue === 1 ||
    //         //     navvalue.currentValue === navvalue.oldValue) {

    //         if (contactslide) {
    //             if (navvalue.currentValue - navvalue.oldValue === -1 ||
    //                 navvalue.currentValue - navvalue.oldValue === 1 ||
    //                 navvalue.currentValue === navvalue.oldValue) {

    //                 setnavValue({ currentValue: 0, oldValue: navvalue.currentValue });
    //             }
    //             else {
    //                 const difference = navvalue.currentValue - navvalue.oldValue;

    //                 if (difference >= 2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue + 1 });
    //                 }
    //                 else if (difference <= -2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue - 1 });
    //                 }


    //             }

    //         }
    //         else if (serviceslide) {
    //             if (navvalue.currentValue - navvalue.oldValue === -1 ||
    //                 navvalue.currentValue - navvalue.oldValue === 1 ||
    //                 navvalue.currentValue === navvalue.oldValue) {

    //                 setnavValue({ currentValue: 1, oldValue: navvalue.currentValue });
    //             }
    //             else {
    //                 const difference = navvalue.currentValue - navvalue.oldValue;

    //                 if (difference >= 2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue + 1 });
    //                 }
    //                 else if (difference <= -2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue - 1 });
    //                 }
    //             }

    //         }
    //         else if (aboutslide) {

    //             if (navvalue.currentValue - navvalue.oldValue === -1 ||
    //                 navvalue.currentValue - navvalue.oldValue === 1 ||
    //                 navvalue.currentValue === navvalue.oldValue) {

    //                 setnavValue({ currentValue: 2, oldValue: navvalue.currentValue });
    //             }
    //             else {
    //                 const difference = navvalue.currentValue - navvalue.oldValue;

    //                 if (difference >= 2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue + 1 });
    //                 }
    //                 else if (difference <= -2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue - 1 });
    //                 }
    //             }

    //         }
    //         else if (skillslide) {

    //             if (navvalue.currentValue - navvalue.oldValue === -1 ||
    //                 navvalue.currentValue - navvalue.oldValue === 1 ||
    //                 navvalue.currentValue === navvalue.oldValue) {

    //                 setnavValue({ currentValue: 3, oldValue: navvalue.currentValue });
    //             }
    //             else {
    //                 const difference = navvalue.currentValue - navvalue.oldValue;

    //                 if (difference >= 2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue + 1 });
    //                 }
    //                 else if (difference <= -2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue - 1 });
    //                 }
    //             }

    //         }
    //         else if (experienceslide) {

    //             if (navvalue.currentValue - navvalue.oldValue === -1 ||
    //                 navvalue.currentValue - navvalue.oldValue === 1 ||
    //                 navvalue.currentValue === navvalue.oldValue) {

    //                 setnavValue({ currentValue: 4, oldValue: navvalue.currentValue });
    //             }
    //             else {
    //                 const difference = navvalue.currentValue - navvalue.oldValue;

    //                 if (difference >= 2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue + 1 });
    //                 }
    //                 else if (difference <= -2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue - 1 });
    //                 }
    //             }

    //         }
    //         else if (testimonialslide) {
    //             if (navvalue.currentValue - navvalue.oldValue === -1 ||
    //                 navvalue.currentValue - navvalue.oldValue === 1 ||
    //                 navvalue.currentValue === navvalue.oldValue) {

    //                 setnavValue({ currentValue: 5, oldValue: navvalue.currentValue });
    //             }
    //             else {
    //                 const difference = navvalue.currentValue - navvalue.oldValue;

    //                 if (difference >= 2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue + 1 });
    //                 }
    //                 else if (difference <= -2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue - 1 });
    //                 }
    //             }

    //         }
    //         else if (portfolioslide) {

    //             if (navvalue.currentValue - navvalue.oldValue === -1 ||
    //                 navvalue.currentValue - navvalue.oldValue === 1 ||
    //                 navvalue.currentValue === navvalue.oldValue) {

    //                 setnavValue({ currentValue: 6, oldValue: navvalue.currentValue });
    //             }
    //             else {
    //                 const difference = navvalue.currentValue - navvalue.oldValue;

    //                 if (difference >= 2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue + 1 });
    //                 }
    //                 else if (difference <= -2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue - 1 });
    //                 }
    //             }
    //         }
    //         else if (contactlastslide) {
    //             if (navvalue.currentValue - navvalue.oldValue === -1 ||
    //                 navvalue.currentValue - navvalue.oldValue === 1 ||
    //                 navvalue.currentValue === navvalue.oldValue) {

    //                 setnavValue({ currentValue: 7, oldValue: navvalue.currentValue });
    //             }
    //             else {
    //                 const difference = navvalue.currentValue - navvalue.oldValue;

    //                 if (difference >= 2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue + 1 });
    //                 }
    //                 else if (difference <= -2) {
    //                     console.log({ difference });
    //                     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue - 1 });
    //                 }
    //             }
    //         }
    //         else {
    //             setcontactlastslide(false);
    //             setcontactslide(false);
    //         }

    //         // }
    //         // else {

    //         // console.log({ navvalue });
    //         // const difference = navvalue.currentValue - navvalue.oldValue;

    //         // if (difference >= 2) {
    //         //     console.log({ difference });
    //         //     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue + 1 });
    //         // }
    //         // else if (difference <= -2) {
    //         //     console.log({ difference });
    //         //     setnavValue({ currentValue: navvalue.currentValue, oldValue: navvalue.oldValue - 1 });
    //         // }

    //         // }

    //     } catch (error) {

    //     }

    // }, [contactslide, serviceslide, aboutslide, skillslide, experienceslide, testimonialslide, portfolioslide, contactlastslide]);


    const incrementCount = () => {

        if (yearsexper < 2) {
            setyearsexper(yearsexper + 1);
        }
        if (porjectcomp < 16) {
            setporjectcomp(porjectcomp + 1);
        }
        if (happyclie < 13) {
            sethappyclie(happyclie + 1);
        }

    };

    const timer = setTimeout(() => { incrementCount() }, 100);

    React.useEffect(() => {
        if (experienceinview) {
            setyearsexper(0);
            setporjectcomp(0);
            sethappyclie(0);
        }
        else {
            clearTimeout(timer);
        }
    }, [experienceinview]);

    React.useEffect(() => {
        if (yearsexper === 2 && porjectcomp === 16 && happyclie === 13) {
            clearTimeout(timer);
        }
    }, [yearsexper, porjectcomp, happyclie]);

    const handlepagination = (event, page) => {
        settestimonialpage(page);
        setemptyRows(testimonialpage > 0 ? Math.max(0, (1 + testimonialpage) * rowsPerPage - Testimonials.length) : 0);
    };

    const handlePortfolio_one_mouseover = (event) => {

        setportfolio_one_show(true);
    };
    const handlePortfolio_two_mouseover = (event) => {

        setportfolio_two_show(true);
    };
    const handlePortfolio_three_mouseover = (event) => {

        setportfolio_three_show(true);
    };

    const handlePortfoliomouseleave = (event) => {
        setportfolio_one_show(false);
        setportfolio_two_show(false);
        setportfolio_three_show(false);
    };

    const handlethemorebuttons = (event, index) => {
        if (index === 0) {
            setservice_one_show(!service_one_show);
            setservice_two_show(false);
            setservice_three_show(false);
            setservice_four_show(false);
        }
        else if (index === 1) {
            setservice_one_show(false);
            setservice_two_show(!service_two_show);
            setservice_three_show(false);
            setservice_four_show(false);
        }
        else if (index === 2) {
            setservice_one_show(false);
            setservice_two_show(false);
            setservice_three_show(!service_three_show);
            setservice_four_show(false);
        }
        else if (index === 3) {
            setservice_one_show(false);
            setservice_two_show(false);
            setservice_three_show(false);
            setservice_four_show(!service_four_show);
        }
        else if (index === 4) {
            setservice_one_show(false);
            setservice_two_show(false);
            setservice_three_show(false);
            setservice_four_show(false);
            setAbout_me_show(!About_me_show);
        }
        else {

        }
    };

    const handleDialogClose = () => {
        setopendialog({ open: false, Portfolio_Index: 0 });
    };

    const handleDialognavigateClose = () => {
        setopendialog({ open: false, Portfolio_Index: 0 });
    };

    const handlecontactchange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        if (event.target.name === "name") {
            setcontactname(value);
        }
        else if (event.target.name === "email") {
            setcontactemail(value);
        }
        else if (event.target.name === "message") {
            setcontactmessage(value);
        }
        else {

        }
    };

    const handlesubmitcontact = (event) => {


        try {

            if (contactname !== "" && contactemail !== "" && contactmessage !== "") {

                setprogresson(true);
                const newobj = {
                    from_name: contactname,
                    from_email: contactemail,
                    message: contactmessage
                };

                emailjs.send('service_373x18j', 'template_3l9xb4n', newobj, 'do-zZ5G9TCljB0czQ')
                    .then((result) => {
                        if (result.status === 200) {
                            setopen_contactme_success(true);
                            setcontactname("");
                            setcontactemail("");
                            setcontactmessage("");
                            setprogresson(false);
                        } else {
                            setprogresson(false);
                            setopen_contactme_error_two(true);
                        }

                    }).catch((error) => {
                        setprogresson(false);
                        setopen_contactme_error_two(true);
                    });

            }
            else {
                setopen_contactme_error_one(true);
            }

        } catch (error) {

            setprogresson(false);
            setopen_contactme_error_two(true);
        }
    };

    const handle_Contactme_dialog_Close = (event) => {
        setopen_contactme_success(false);
        setopen_contactme_error_one(false);
        setopen_contactme_error_two(false);
    };


    return (

        <React.Fragment>

            <Grid container direction="column" className="grandparent" >

                {/* contact me */}
                <Grid item xs={12} ref={contactref} >

                    <Grid container
                        justify="center"
                        alignItems="center"
                        direction="row"
                        sx={{
                            padding: "1em",
                            paddingTop: "5em",
                            paddingBottom: "5em"
                        }}
                    >

                        {matchesSM && <Fade in={contactslide}>

                            {<Grid item xs={12} sm={6} md={6}
                                sx={{
                                    [theme.breakpoints.down("sm")]: {
                                        Width: "100%",
                                        marginBottom: "1em",
                                    },

                                }}>

                                {<Card
                                    sx={{
                                        borderRadius: "4em",
                                        padding: "1em",
                                        position: "relative",
                                        animationName: "animat2",
                                        animationDuration: "4s",
                                        animationIterationCount: "infinite",

                                        "@keyframes animat2": {
                                            "0%": { left: "0px", top: "0px" },
                                            "50%": { left: "0px", top: "-20px" },
                                            "100%": { left: "0px", top: "0px" },
                                        }
                                    }}>
                                    <CardMedia
                                        component="img"
                                        elevation={12}
                                        sx={{ borderRadius: "3em", maxWidth: "100%", minWidth: "250px", backgroundColor: theme.palette.portfolio_photo.main }}
                                        image={myphoto_one}
                                        alt="portfolio_image"
                                    />
                                </Card>}


                            </Grid>}

                        </Fade>}

                        <Fade in={contactslide}>

                            <Grid item xs={12} sm={12} md={6}
                                sx={{
                                    textAlign: matchesSM ? "center" : undefined,
                                    minWidth: "21.0em",
                                    padding: "1em",
                                    [theme.breakpoints.up("sm")]: {
                                        paddingLeft: "3em",
                                    },
                                    [theme.breakpoints.down("xs")]: {
                                        paddingLeft: "0em",
                                    },

                                }}>

                                <Typography variant="h3" align={matchesMD ? "center" : "left"}>
                                    Hello, It's Me
                                </Typography>

                                <Typography variant="h2" align={matchesMD ? "center" : "left"}>
                                    Firaol Tulu
                                </Typography>

                                <Typography variant="h6" align={matchesMD ? "center" : "left"}>
                                    I'm a{" "}
                                    <TypeAnimation
                                        sequence={[
                                            "Software Developer.",
                                            1000,
                                            "Web Developer.",
                                            1000,
                                            "UI/UX Designer.",
                                            1000,
                                        ]}
                                        speed={10}
                                        repeat={Infinity}
                                        style={{}}
                                    />
                                </Typography>

                                <Typography variant="subtitle3" align={matchesMD ? "center" : "left"} sx={{ marginTop: "1em" }}>
                                    I Specialize in building custom, responsive websites and software that are not
                                    only beautiful but also deliver a seamless user experience.
                                </Typography>

                                <Grid
                                    container
                                    justify={matchesXS ? "center" : "left"}
                                    sx={{ marginTop: "1em" }}>

                                    <Grid item xs={6}>

                                        <Button
                                            href="https://chocolate-kristal-51.tiiny.site"
                                            target="_blank"
                                            sx={{
                                                ...theme.typography.estimate,
                                                backgroundColor: theme.palette.secondary.main,
                                                borderRadius: 50,
                                                height: 45,
                                                width: 145,
                                                "&:hover": {
                                                    backgroundColor: theme.palette.secondary.light,
                                                },
                                            }}

                                            variant="outlined"

                                        >
                                            <span style={{ marginRight: 10 }}>Download CV</span>

                                        </Button>

                                    </Grid>

                                    <Grid item xs={6}>

                                        <Button
                                            sx={{
                                                ...theme.typography.learnButton,
                                                backgroundColor: theme.palette.secondary.main,
                                                fontSize: "0.9rem",
                                                height: 45,
                                                width: 145,
                                                "&:hover": {
                                                    backgroundColor: theme.palette.secondary.light,
                                                },
                                            }}
                                            variant="outlined"
                                            onClick={() => {
                                                setnavValue({ currentValue: 7, oldValue: navvalue.currentValue });
                                            }}
                                            endIcon={<ArrowForwardIcon
                                                width={15}
                                                height={15}
                                                fill={theme.palette.primary.contrastText}
                                            />}
                                        >
                                            <span style={{ marginRight: 8 }}>Contact Me</span>

                                        </Button>

                                    </Grid>

                                </Grid>

                            </Grid>

                        </Fade>

                        {!matchesSM && <Fade in={contactslide}>

                            {<Grid item xs={12} sm={12} md={6}
                                align="center"
                                sx={{
                                    Width: "100%",

                                }}>

                                {!matchesSM && <Card align={matchesSM ? "center" : "center"}
                                    sx={{

                                        borderRadius: "4em",
                                        padding: "1em",
                                        position: "relative",
                                        animationName: "animat1",
                                        animationDuration: "4s",
                                        animationIterationCount: "infinite",
                                        maxWidth: "370px", minWidth: "250px",
                                        maxHeight: "370px",

                                        "@keyframes animat1": {
                                            "0%": { left: "0px", top: "0px" },
                                            "30%": { left: "0px", top: matchesMD ? "5px" : "-10px" },
                                            "60%": { left: "0px", top: "20px" },
                                            "100%": { left: "0px", top: "0px" },
                                        }
                                    }}>
                                    <CardMedia
                                        component="img"
                                        elevation={12}

                                        sx={{ borderRadius: "3em", maxWidth: "343px", minWidth: "250px", maxHeight: "343px", backgroundColor: theme.palette.portfolio_photo.main }}
                                        image={myphoto_one}
                                        alt="portfolio_image"
                                    />
                                </Card>}

                            </Grid>}

                        </Fade>}

                    </Grid>

                </Grid>

                {/* services */}
                <Grid item xs={12} ref={servicesref} sx={{
                    padding: "1em",
                    paddingTop: "5em",
                    backgroundColor: theme.palette.primary.main,
                }}>

                    <Grid container direction="column">

                        <Grid item xs={12} sx={{ marginBottom: "5em" }}>
                            <Typography variant="h6" align={"center"}>
                                Services
                            </Typography>
                            <Typography variant="h3" align={"center"}>
                                Some of the Services I provides.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sx={{}}>

                            <Grid container direction="column" rowSpacing={4}>

                                <Grid item xs={12}>

                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent={matchesSM ? "center" : undefined}
                                        sx={{
                                            marginTop: "3em",
                                            [theme.breakpoints.down("sm")]: {
                                            },
                                        }}
                                    >

                                        <Gridcustomone item xs={12} sm={10} md={8}
                                            style={{
                                                paddingLeft: matchesSM ? 0 : "2em",
                                                textAlign: matchesSM ? "center" : undefined,
                                            }}
                                        >
                                            <Paper
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <Typography variant="h4">Custom Software Development</Typography>

                                                <Typography variant="subtitle3">
                                                    Complete digital solutions, from investigation to{" "}
                                                    <span sx={{
                                                        fontFamily: "Pacifico",
                                                        color: theme.palette.common.orange,
                                                    }}>celebration.</span>
                                                </Typography>
                                                <br></br>
                                                <br></br>

                                                {service_one_show && <Fade in={service_one_show} style={{ transitionDelay: service_one_show ? '100ms' : '0ms' }}>

                                                    <Box>
                                                        <Typography variant="subtitle3">
                                                            Am a skilled developers specializes in crafting customized software solutions
                                                            that align with your unique business requirements. I utilize the latest
                                                            technologies and industry best practices to develop scalable, secure, and
                                                            user-friendly software applications. I follow an agile development approach
                                                            to ensure efficient project management and regular communication.
                                                        </Typography>

                                                    </Box>
                                                </Fade>}

                                                {<Button
                                                    variant="outlined"
                                                    sx={{
                                                        ...theme.typography.learnButton,
                                                        backgroundColor: theme.palette.secondary.main,
                                                        fontSize: "0.7rem",
                                                        height: 45,
                                                        width: 145,
                                                        marginTop: "1em",
                                                        "&:hover": {
                                                            backgroundColor: theme.palette.secondary.light,
                                                        },
                                                        [theme.breakpoints.down("sm")]: {
                                                            marginBottom: "2em",
                                                        },
                                                    }}
                                                    onClick={(event) => {
                                                        handlethemorebuttons(event, 0);
                                                    }}
                                                >
                                                    <span style={{ marginRight: 10 }}>{!service_one_show ? "Learn More" : "Back"}</span>
                                                    {!service_one_show ? <ArrowForwardIcon
                                                        width={10}
                                                        height={10}
                                                        fill={theme.palette.common.blue}
                                                    /> : <ArrowBackIcon width={10}
                                                        height={10}
                                                        fill={theme.palette.common.blue}></ArrowBackIcon>}
                                                </Button>}


                                            </Paper>
                                        </Gridcustomone>


                                    </Grid>

                                </Grid>

                                <Grid item xs={12}>

                                    <Grid container direction="row"
                                        justifyContent={matchesSM ? "center" : "flex-end"}
                                        columnSpacing={12}
                                        alignItems="center"
                                        sx={{
                                            padding: matchesSM ? 0 : "2em",
                                            marginTop: "1em",
                                            [theme.breakpoints.down("sm")]: {

                                            },
                                        }}
                                    >


                                        <Gridcustomone item xs={12} sm={10} md={8}
                                            style={{
                                                textAlign: matchesSM ? "center" : "right",
                                            }}
                                        >
                                            <Paper
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <Typography variant="h4">iOS/Android App Development</Typography>

                                                <Typography variant="subtitle3" sx={{
                                                    marginBottom: "1em",
                                                }}>
                                                    Extend Functionality. Extend Access. Increase Engagement.
                                                </Typography>
                                                <br></br>
                                                <Typography variant="subtitle3" sx={{
                                                    marginBottom: "25em",
                                                }}>
                                                    Integrate your web experience or create a standalone app
                                                    with either mobile platform.
                                                </Typography>
                                                <br></br>
                                                <br></br>

                                                {service_two_show && <Fade in={service_two_show} style={{ transitionDelay: service_two_show ? '100ms' : '0ms' }}>

                                                    <Box>
                                                        <Typography variant="subtitle3">
                                                            UI/UX Design: Am a talented designers Which creates a stunning and intuitive
                                                            user interfaces for your iOS/Android apps.<br></br>
                                                            Native App Development: I specialize in native app development for iOS and Android platforms.<br></br>
                                                            Hybrid and Cross-Platform App Development: If you prefer a cost-effective approach or
                                                            need an app that can run on multiple platforms, I offer hybrid and
                                                            cross-platform app development services. Using frameworks like React Native and Flutter.
                                                        </Typography>

                                                    </Box>
                                                </Fade>}

                                                {<Button
                                                    variant="outlined"
                                                    sx={{
                                                        ...theme.typography.learnButton,
                                                        backgroundColor: theme.palette.secondary.main,
                                                        fontSize: "0.7rem",
                                                        height: 45,
                                                        width: 145,
                                                        marginTop: "1em",
                                                        "&:hover": {
                                                            backgroundColor: theme.palette.secondary.light,
                                                        },
                                                        [theme.breakpoints.down("sm")]: {
                                                            marginBottom: "2em",
                                                        },
                                                    }}
                                                    onClick={(event) => {
                                                        handlethemorebuttons(event, 1);
                                                    }}
                                                >
                                                    <span style={{ marginRight: 10 }}>{!service_two_show ? "Learn More" : "Back"}</span>
                                                    {!service_two_show ? <ArrowForwardIcon
                                                        width={10}
                                                        height={10}
                                                        fill={theme.palette.common.blue}
                                                    /> : <ArrowBackIcon width={10}
                                                        height={10}
                                                        fill={theme.palette.common.blue}></ArrowBackIcon>}
                                                </Button>}

                                            </Paper>
                                        </Gridcustomone>


                                    </Grid>

                                </Grid>

                                <Grid item xs={12}>

                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent={matchesSM ? "center" : undefined}
                                        // justify={matchesSM ? "center" : undefined}
                                        sx={{
                                            marginTop: "1em",
                                            [theme.breakpoints.down("sm")]: {
                                                // padding: 25,
                                            },
                                        }}
                                    >

                                        <Gridcustomone item xs={12} sm={10} md={8}
                                            style={{
                                                paddingLeft: matchesSM ? 0 : "2em",
                                                textAlign: matchesSM ? "center" : undefined,
                                            }}
                                        >
                                            <Paper
                                                // align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <Typography variant="h4">Website Development.</Typography>



                                                <Typography variant="subtitle3">
                                                    Optimized for Search Engines, built for speed, Market standard.
                                                </Typography>
                                                <br></br>
                                                <br></br>

                                                {service_three_show && <Fade in={service_three_show} style={{ transitionDelay: service_three_show ? '100ms' : '0ms' }}>

                                                    <Box>
                                                        <Typography variant="subtitle3">
                                                            Front-end Development: transforms the design concepts into fully functional websites.
                                                            Using modern web technologies like HTML5, CSS3, JavaScript, and React frameworks,
                                                            I ensure a high-quality user interface and interactivity. I follow best
                                                            practices in coding and optimization to deliver fast-loading and accessible websites.
                                                        </Typography>

                                                    </Box>
                                                </Fade>}

                                                {<Button
                                                    variant="outlined"
                                                    sx={{
                                                        ...theme.typography.learnButton,
                                                        backgroundColor: theme.palette.secondary.main,
                                                        fontSize: "0.7rem",
                                                        height: 45,
                                                        width: 145,
                                                        marginTop: "1em",
                                                        "&:hover": {
                                                            backgroundColor: theme.palette.secondary.light,
                                                        },
                                                        [theme.breakpoints.down("sm")]: {
                                                            marginBottom: "2em",
                                                        },
                                                    }}
                                                    onClick={(event) => {
                                                        handlethemorebuttons(event, 2);
                                                    }}
                                                >
                                                    <span style={{ marginRight: 10 }}>{!service_three_show ? "Learn More" : "Back"}</span>
                                                    {!service_three_show ? <ArrowForwardIcon
                                                        width={10}
                                                        height={10}
                                                        fill={theme.palette.common.blue}
                                                    /> : <ArrowBackIcon width={10}
                                                        height={10}
                                                        fill={theme.palette.common.blue}></ArrowBackIcon>}
                                                </Button>}

                                            </Paper>
                                        </Gridcustomone>


                                    </Grid>

                                </Grid>

                                <Grid item xs={12}>

                                    <Grid container direction="row"
                                        justifyContent={matchesSM ? "center" : "flex-end"}
                                        columnSpacing={12}
                                        alignItems="center"
                                        sx={{
                                            padding: matchesSM ? 0 : "2em",
                                            marginTop: "1em",
                                            [theme.breakpoints.down("sm")]: {

                                            },
                                        }}
                                    >


                                        <Gridcustomone item xs={12} sm={10} md={8}
                                            style={{
                                                textAlign: matchesSM ? "center" : "right",
                                            }}
                                        >
                                            <Paper
                                                // align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <Typography variant="h4">BackEnd Development</Typography>

                                                <Typography variant="subtitle3" sx={{
                                                    marginBottom: "1em",
                                                }}>
                                                    Designing and implementing application programming interfaces (APIs)
                                                    that allow different software systems to communicate with each other.
                                                </Typography>
                                                <br></br>
                                                <br></br>


                                                {service_four_show && <Fade in={service_four_show} style={{ transitionDelay: service_four_show ? '100ms' : '0ms' }}>

                                                    <Box>

                                                        <Typography variant="subtitle3">
                                                            I specialize in Creating robust and efficient APIs (Application Programming Interfaces) to
                                                            allow communication between different software systems and enable data exchange,
                                                            Designing optimized database schemas, implementing data storage solutions,
                                                            handling data migrations, and ensuring smooth data operations. Developing the core business logic,
                                                            algorithms, and workflows that drive the application's functionality on the server side.
                                                            Implementing user authentication and authorization mechanisms, as well as applying security
                                                            measures to protect against common vulnerabilities, such as cross-site scripting (XSS),
                                                            SQL injection, and cross-site request forgery (CSRF).
                                                        </Typography>

                                                    </Box>
                                                </Fade>}

                                                {<Button
                                                    variant="outlined"
                                                    sx={{
                                                        ...theme.typography.learnButton,
                                                        backgroundColor: theme.palette.secondary.main,
                                                        fontSize: "0.7rem",
                                                        height: 45,
                                                        width: 145,
                                                        marginTop: "1em",
                                                        "&:hover": {
                                                            backgroundColor: theme.palette.secondary.light,
                                                        },
                                                        [theme.breakpoints.down("sm")]: {
                                                            marginBottom: "2em",
                                                        },
                                                    }}
                                                    onClick={(event) => {
                                                        handlethemorebuttons(event, 3);
                                                    }}
                                                >
                                                    <span style={{ marginRight: 10 }}>{!service_four_show ? "Learn More" : "Back"}</span>
                                                    {!service_four_show ? <ArrowForwardIcon
                                                        width={10}
                                                        height={10}
                                                        fill={theme.palette.common.blue}
                                                    /> : <ArrowBackIcon width={10}
                                                        height={10}
                                                        fill={theme.palette.common.blue}></ArrowBackIcon>}
                                                </Button>}

                                            </Paper>

                                        </Gridcustomone>


                                    </Grid>

                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>

                {/* about me */}
                <Grid item xs={12} ref={aboutref} sx={{ paddingTop: "5em" }}>

                    <Grid container
                        justify="flex-end"
                        alignItems="center"
                        direction="row"
                        sx={{
                            padding: "1em",
                            paddingBottom: "5em"
                        }}
                    >

                        {<Grid item xs={12} sm={12} md={6}
                            align="center"
                            sx={{
                                paddingTop: "2em",
                            }}>

                            {<Card align={matchesMD ? "center" : "left"}
                                sx={{
                                    borderRadius: "4em",
                                    padding: "1em",
                                    position: "relative",
                                    animationName: "animat3",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    maxWidth: "433px", minWidth: "250px",
                                    maxHeight: "433px",
                                    "@keyframes animat3": {
                                        "0%": { left: "0px", top: "0px" },
                                        "50%": { left: "0px", top: matchesMD ? "-20px" : "20px" },
                                        "100%": { left: "0px", top: "0px" },
                                    }
                                }}>
                                <CardMedia
                                    component="img"
                                    elevation={12}
                                    sx={{ borderRadius: "3em", maxWidth: "401px", minWidth: "250px", maxHeight: "401px", backgroundColor: theme.palette.portfolio_photo_two.main }}
                                    image={myphoto_two}
                                    alt="portfolio_image"
                                />
                            </Card>}


                        </Grid>}


                        <Grid item xs={12} sm={12} md={6}

                            sx={{

                                textAlign: matchesSM ? "center" : undefined,
                                minWidth: "21.0em",
                                padding: "1em",
                                [theme.breakpoints.up("sm")]: {
                                    paddingLeft: "3em",
                                },
                                [theme.breakpoints.down("xs")]: {
                                    paddingLeft: "0em",
                                },

                            }}>

                            <Typography variant="subtitle3" align={matchesSM ? "center" : "left"}>
                                About Me
                            </Typography>

                            <Typography variant="h6" align={matchesSM ? "center" : "left"}>
                                I am passionate about creating beautiful & functional softwares
                                that make a positive impact on society.
                            </Typography>


                            <Typography variant="subtitle3" align={matchesSM ? "center" : "left"} sx={{ marginTop: "1em" }}>
                                As a computer science graduate passionate about leveraging technology
                                to solve real-world problems, I'm excited to introduce myself.
                                With strong analytical and problem-solving skills, I bring a solid
                                foundation in computer science principles and programming languages.
                            </Typography>

                            <Grid
                                container
                                justify={matchesXS ? "center" : "left"}
                                sx={{ marginTop: "1em" }}>

                                <Grid item xs={12}>

                                    {About_me_show && <Fade in={About_me_show} style={{ transitionDelay: About_me_show ? '100ms' : '0ms' }}>

                                        <Box>

                                            <Typography variant="subtitle3">
                                                During my time as a employee at midroc investment group, I had the opportunity to apply my knowledge
                                                in various projects, from developing web applications to implementing
                                                algorithms for data analysis. Through these experiences, I honed my
                                                abilities to write clean and efficient code, ensuring the reliability
                                                and scalability of software solutions.
                                            </Typography>
                                            <br></br>
                                            <br></br>

                                            <Typography variant="subtitle3">
                                                In addition to technical skills, I am a strong advocate for collaboration and teamwork.
                                                Through teams projects and internships, I have learned to effectively communicate complex
                                                ideas and work alongside diverse teams to achieve shared goals.
                                            </Typography>
                                            <br></br>
                                            <br></br>

                                            <Typography variant="subtitle3">
                                                Constantly driven to stay at the forefront of the industry, I am dedicated
                                                to continuous learning and professional growth. I actively follow emerging
                                                trends and technologies, attending workshops and participating in online
                                                courses to expand my knowledge and skill set.
                                            </Typography>

                                        </Box>
                                    </Fade>}

                                    {<Button
                                        variant="outlined"
                                        sx={{
                                            ...theme.typography.learnButton,
                                            backgroundColor: theme.palette.secondary.main,
                                            fontSize: "0.7rem",
                                            height: 45,
                                            width: 145,
                                            marginTop: "1em",
                                            "&:hover": {
                                                backgroundColor: theme.palette.secondary.light,
                                            },
                                            [theme.breakpoints.down("sm")]: {
                                                marginBottom: "2em",
                                            },
                                        }}
                                        onClick={(event) => {
                                            handlethemorebuttons(event, 4);
                                        }}
                                    >
                                        <span style={{ marginRight: 10 }}>{!About_me_show ? "Read More" : "Back"}</span>
                                        {!About_me_show ? <ArrowForwardIcon
                                            width={10}
                                            height={10}
                                            fill={theme.palette.common.blue}
                                        /> : <ArrowBackIcon width={10}
                                            height={10}
                                            fill={theme.palette.common.blue}></ArrowBackIcon>}
                                    </Button>}

                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>

                {/* Skills */}
                <Grid item xs={12} ref={skillref} sx={{

                    padding: "1em",
                    paddingTop: "5em",
                    backgroundColor: theme.palette.primary.main,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                    <Grid container direction="column">

                        <Grid item xs={12} sx={{ marginBottom: "5em" }}>
                            <Typography variant="h6" align={"center"}>
                                Skills
                            </Typography>
                            <Typography variant="h3" align={"center"}>
                                Some of My Working Tools
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sx={{}}>

                            <Grid container direction="column" rowSpacing={4}>

                                <Grid item xs={12} sx={{}}>

                                    <Typography variant="h6" align={"center"}
                                        sx={{ marginBottom: "1em" }}>
                                        Languages
                                    </Typography>

                                    <Grid container direction="row" columnSpacing={8} rowSpacing={2} >

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={javaicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    Java
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={javascripticon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    Javascript
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={cicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    c#
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={pythonicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    Python
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={htmlicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    HTML
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={cssicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    CSS
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={phpicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    php
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                    </Grid>

                                </Grid>


                                <Grid item xs={3} sx={{}}>

                                    <Typography variant="h6" align={"center"}
                                        sx={{ marginBottom: "1em" }}>
                                        Frontend frameworks
                                    </Typography>

                                    <Grid container direction="row" columnSpacing={8} rowSpacing={2} >

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={reacticon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    React
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={materialuiicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    Material UI
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={bootstrapicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    Bootstrap
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                    </Grid>

                                </Grid>


                                <Grid item xs={3} sx={{}}>

                                    <Typography variant="h6" align={"center"}
                                        sx={{ marginBottom: "1em" }}>
                                        Backend frameworks & Databases
                                    </Typography>

                                    <Grid container direction="row" columnSpacing={8} rowSpacing={2} >

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={nodejsicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    Node
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={netframeworkicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    .Net Core
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={mongodbicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    MongoDB
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                        <Gridcustom item xs={6} sm={4} md={3} >
                                            <Paper
                                                align={"center"}
                                                elevation={12}
                                                sx={{
                                                    alignContent: "center",
                                                    padding: "1em",
                                                }}>
                                                <img
                                                    align={"center"}
                                                    sx={{
                                                    }}
                                                    alt="java icon"
                                                    src={mysqlicon}
                                                />
                                                <Typography variant="h6" align={"center"}>
                                                    Mqsql
                                                </Typography>
                                            </Paper>
                                        </Gridcustom>

                                    </Grid>

                                </Grid>


                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>

                {/* Working experience */}
                <Grid item xs={12} ref={experienceref} className="invisible" sx={{

                    padding: "1em",
                    paddingTop: "5em",
                }}>
                    <Grid container direction="column" sx={{ padding: "1em", }}>

                        <Grid item xs={12} sx={{ marginBottom: "5em" }}>
                            <Typography variant="h3" align={"center"}>
                                Working Experience
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sx={{}}>

                            <Grid container direction="row"
                                sx={{
                                    alignContent: "center",
                                    backgroundColor: theme.palette.work_experience.main,
                                    borderRadius: "1em",
                                }}>

                                <Grid item xs={12} md={4} >
                                    <Box sx={{ padding: "3em" }}>

                                        <Typography variant="h4" textAlign={"center"} color={theme.palette.work_experience.contrastText}>
                                            {yearsexper}
                                        </Typography>
                                        <Typography variant="h6" textAlign={"center"} color={theme.palette.work_experience.contrastText}>
                                            Years Experience
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={4} >
                                    <Box sx={{ padding: "3em" }}>
                                        <Typography variant="h4" textAlign={"center"} color={theme.palette.work_experience.contrastText}>
                                            {porjectcomp}
                                        </Typography>
                                        <Typography variant="h6" textAlign={"center"} color={theme.palette.work_experience.contrastText}>
                                            Projects Completed
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={4} >
                                    <Box sx={{ padding: "3em" }}>
                                        <Typography variant="h4" textAlign={"center"} color={theme.palette.work_experience.contrastText}>
                                            {happyclie}
                                        </Typography>
                                        <Typography variant="h6" textAlign={"center"} color={theme.palette.work_experience.contrastText}>
                                            Happy clients
                                        </Typography>
                                    </Box>
                                </Grid>


                            </Grid>

                        </Grid>

                    </Grid>


                </Grid>

                {/* client feedback */}
                <Grid item xs={12} ref={Testimonialsref} sx={{
                    padding: "1em",
                    paddingTop: "5em",
                    backgroundColor: theme.palette.primary.main,
                }}>
                    <Grid container direction="column">

                        <Grid item xs={12} sx={{ marginBottom: "5em" }}>
                            <Typography variant="h6" align={"center"}>
                                Testimonials
                            </Typography>
                            <Typography variant="h3" align={"center"}>
                                What Clients are Saying about Me.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sx={{}}>

                            <Grid container direction="column" rowSpacing={4} justifyContent="center"
                                alignItems="center">

                                <Grid item xs={12} sx={{}}>

                                    <Grid container direction="row" justifyContent="center"
                                        columnSpacing={2} rowSpacing={2}  >

                                        {Testimonials.map((row, index) => {
                                            if (index < (testimonialpage * rowsPerPage) && index >= ((testimonialpage * rowsPerPage) - rowsPerPage)) {
                                                const feeee = (index < (testimonialpage * rowsPerPage) && index >= ((testimonialpage * rowsPerPage) - rowsPerPage));
                                                return (
                                                    // <Fade in={feeee} style={{ transitionDelay: feeee ? '50ms' : '0ms' }} key={`Testimonials-key-${index}`}>
                                                    <Gridcustomone item xs={12} sm={6} md={3} key={`Testimonials-key-${index}`} >

                                                        <Card sx={{}} elevation={8}>
                                                            <CardHeader
                                                                disableTypography
                                                                avatar={
                                                                    <Avatar sx={{ width: 56, height: 56 }} aria-label="recipe" alt="Avatar">
                                                                        {row.name[0]}
                                                                    </Avatar>
                                                                }

                                                                title={<Typography variant="h6" align={"left"}>{row.name}</Typography>}
                                                                subheader={<Typography variant="subtitle4" align={"left"}>{row.title}</Typography>}

                                                            />

                                                            <CardContent>
                                                                <Typography variant="subtitle5" color="text.secondary">
                                                                    {row.message}
                                                                </Typography>
                                                            </CardContent>

                                                        </Card>

                                                    </Gridcustomone>
                                                    // </Fade>
                                                );
                                            }

                                        })}


                                    </Grid>

                                </Grid>

                                <Grid item xs={12} sx={{}}>
                                    <Box alignContent="center" sx={{ alignItems: "center" }}>
                                        <Pagination count={Testimonials.length % rowsPerPage === 0 ? Testimonials.length / rowsPerPage : Math.floor((Testimonials.length / rowsPerPage)) + 1} variant="outlined" color="secondary" sx={{ alignItems: "center" }}
                                            onChange={(event, page) => { handlepagination(event, page) }} />
                                    </Box>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>

                {/*My Portfolio  */}
                <Grid item xs={12} ref={Portfolio_cardref} sx={{ padding: "1em", paddingTop: "5em", }}>

                    <Grid container direction="column">

                        <Grid item xs={12} sx={{ marginBottom: "5em" }}>
                            <Typography variant="h6" align={"center"}>
                                Portfolio
                            </Typography>
                            <Typography variant="h3" align={"center"}>
                                Featured Projects
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ padding: "1em" }}>

                            <Grid container direction="row" justifyContent="center" alignItems="center" columnSpacing={2} rowSpacing={2} >

                                <Grid item xs={12} sm={6} md={4} >

                                    <Card
                                        ref={Portfolio_cardref}
                                        align={"left"}
                                        elevation={12}
                                        name="portfolio_one"
                                        id="portfolio_one"
                                        onMouseOver={(event) => { handlePortfolio_one_mouseover(event) }}
                                        onMouseLeave={(event) => { handlePortfoliomouseleave(event) }}
                                        sx={{
                                            position: "relative",
                                            padding: "0em",
                                            backgroundColor: theme.palette.portfolio_one.main
                                        }}>
                                        <Slide in={portfolio_one_show} style={{ transitionDelay: portfolio_one_show ? '50ms' : '0ms' }}>

                                            {<Grid container sx={{
                                                backgroundColor: "aqua",
                                                backgroundColor: "rgba(0, 0, 0, .75)",
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                            }}>
                                                <Grid item xs={12} align="right">
                                                    {<IconButton color="portfolio" onClick={(event) => { setopendialog({ open: true, Portfolio_Index: 0 }) }} sx={{}}>
                                                        <LaunchIcon></LaunchIcon>
                                                    </IconButton>}
                                                </Grid>

                                                <Grid item xs={12} sx={{ padding: "1em" }}>

                                                    <Typography variant="subtitle5" textAlign={"left"} color={theme.palette.portfolio_one.contrastText}>
                                                        E-Learning course review
                                                    </Typography>
                                                    <br></br>
                                                    <Typography variant="subtitle4" textAlign={"left"} color={theme.palette.portfolio_one.contrastText}>
                                                        Build this fully responsive review course to make the
                                                        end user review the course before purchase.
                                                    </Typography>

                                                </Grid>


                                            </Grid>}

                                        </Slide>

                                        <Paper
                                            align={"center"}
                                            elevation={2}
                                            sx={{
                                                alignContent: "center",
                                                padding: "2em",
                                                backgroundColor: theme.palette.portfolio_one.main,
                                                "&:hover": {
                                                },
                                            }}>
                                            <img
                                                align={"center"}
                                                sx={{

                                                }}
                                                alt="java icon"
                                                src={portfolio_one}
                                            />
                                        </Paper>

                                    </Card>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4} >

                                    <Card
                                        align={"left"}
                                        elevation={12}
                                        name="portfolio_two"
                                        id="portfolio_two"
                                        onMouseOver={(event) => { handlePortfolio_two_mouseover(event) }}
                                        onMouseLeave={(event) => { handlePortfoliomouseleave(event) }}
                                        sx={{
                                            position: "relative",
                                            padding: "0em",
                                            backgroundColor: theme.palette.portfolio_two.main
                                        }}>
                                        <Slide in={portfolio_two_show} style={{ transitionDelay: portfolio_two_show ? '50ms' : '0ms' }}>

                                            {<Grid container sx={{
                                                backgroundColor: "aqua",
                                                backgroundColor: "rgba(0, 0, 0, .75)",
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                            }}>
                                                <Grid item xs={12} align="right">
                                                    {<IconButton color="portfolio" onClick={(event) => { setopendialog({ open: true, Portfolio_Index: 1 }) }} sx={{}}>
                                                        <LaunchIcon></LaunchIcon>
                                                    </IconButton>}
                                                </Grid>

                                                <Grid item xs={12} sx={{ padding: "1em" }}>

                                                    <Typography variant="subtitle5" textAlign={"left"} color={theme.palette.portfolio_two.contrastText}>
                                                        E-Learning Admin side.
                                                    </Typography>
                                                    <br></br>
                                                    <Typography variant="subtitle4" textAlign={"left"} color={theme.palette.portfolio_two.contrastText}>
                                                        Build this fully responsive course admin side that include
                                                        course listing, Editing, Adding etc.
                                                    </Typography>

                                                </Grid>


                                            </Grid>}

                                        </Slide>
                                        <Paper
                                            align={"center"}
                                            elevation={2}
                                            sx={{
                                                alignContent: "center",
                                                padding: "2em",
                                                backgroundColor: theme.palette.portfolio_two.main,
                                                "&:hover": {
                                                },
                                            }}>
                                            <img
                                                align={"center"}
                                                sx={{

                                                }}
                                                alt="java icon"
                                                src={portfolio_two}
                                            />
                                        </Paper>

                                    </Card>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4} >

                                    <Card
                                        align={"left"}
                                        elevation={12}
                                        name="portfolio_two"
                                        id="portfolio_two"
                                        onMouseOver={(event) => { handlePortfolio_three_mouseover(event) }}
                                        onMouseLeave={(event) => { handlePortfoliomouseleave(event) }}
                                        sx={{
                                            position: "relative",
                                            padding: "0em",
                                            backgroundColor: theme.palette.portfolio_three.main
                                        }}>

                                        <Slide in={portfolio_three_show} style={{ transitionDelay: portfolio_three_show ? '50ms' : '0ms' }}>
                                            {<Grid container sx={{
                                                backgroundColor: "aqua",
                                                backgroundColor: "rgba(0, 0, 0, .75)",
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                            }}>
                                                <Grid item xs={12} align="right">
                                                    {<IconButton color="portfolio" onClick={(event) => { setopendialog({ open: true, Portfolio_Index: 2 }) }} sx={{}}>
                                                        <LaunchIcon></LaunchIcon>
                                                    </IconButton>}
                                                </Grid>

                                                <Grid item xs={12} sx={{ padding: "1em" }}>

                                                    <Typography variant="subtitle5" textAlign={"left"} color={theme.palette.portfolio_three.contrastText}>
                                                        Online Learning website.
                                                    </Typography>
                                                    <br></br>
                                                    <Typography variant="subtitle4" textAlign={"left"} color={theme.palette.portfolio_three.contrastText}>
                                                        Build this fully responsive Online Learning website that include
                                                        signup & signin to the website, purchasing a course, etc.
                                                    </Typography>

                                                </Grid>


                                            </Grid>}
                                        </Slide>

                                        <Paper
                                            align={"center"}
                                            elevation={2}
                                            sx={{
                                                alignContent: "center",
                                                padding: "2em",
                                                backgroundColor: theme.palette.portfolio_three.main,
                                                "&:hover": {
                                                },
                                            }}>
                                            <img
                                                align={"center"}
                                                sx={{

                                                }}
                                                alt="java icon"
                                                src={portfolio_three}
                                            />
                                        </Paper>

                                    </Card>

                                </Grid>

                            </Grid>


                        </Grid>

                    </Grid>

                </Grid >

                {/*Contact Me  */}
                <Grid item xs={12} ref={contactone_ref} sx={{ backgroundColor: theme.palette.primary.main, padding: "1em", paddingTop: "5em", }}>

                    <Grid container direction="column">

                        <Grid item xs={12} sx={{ marginBottom: "5em" }}>
                            <Typography variant="h6" align={"center"}>
                                Let's Talk
                            </Typography>
                            <Typography variant="h3" align={"center"}>
                                Have a Project idea.
                            </Typography>
                            <Typography variant="h3" align={"center"}>
                                Feel Free to Contact.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ padding: "1em" }} >


                            <Grid container direction="row" justifyContent="center"
                                alignItems="center" columnSpacing={2} rowSpacing={2}
                                sx={{ marginBottom: "3em" }}>


                                <Grid item xs={12} sm={6} md={6}>

                                    <Card
                                        elevation={12}
                                        sx={{
                                            padding: "0em",
                                            backgroundColor: theme.palette.contactme_one.main,
                                            borderRadius: "1em",
                                            verticalAlign: "center",
                                            position: "relative",
                                            animationName: "example",
                                            animationDuration: "4s",
                                            animationIterationCount: "infinite",

                                            "@keyframes example": {
                                                "0%": { left: "0px", top: "0px" },
                                                "50%": { left: "0px", top: "100px" },
                                                "100%": { left: "0px", top: "0px" },
                                            }
                                        }}>

                                        {<Grid container direction="row" sx={{
                                            padding: "2em",
                                        }}>

                                            <Grid item xs={12} align="left" sx={{ paddingBottom: "1em" }}>

                                                <Grid container direction="row" columnSpacing={2}>

                                                    <Grid item xs={2}>
                                                        <Box sx={{ padding: "8px" }}>
                                                            <PhoneIcon fontSize="large" color="primary"></PhoneIcon>
                                                        </Box>
                                                    </Grid>

                                                    <Grid item xs={10}>
                                                        <Box sx={{ marginBottom: "8px", marginLeft: "1em" }}>
                                                            <Typography variant="subtitle5" textAlign={"left"} color={theme.palette.contactme_one.contrastText}>
                                                                Call
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ marginLeft: "1em" }}>
                                                            <Typography variant="subtitle4" textAlign={"left"} color={theme.palette.contactme_one.contrastText}>
                                                                (+251) 911 782 233
                                                            </Typography>
                                                        </Box>

                                                    </Grid>

                                                </Grid>

                                            </Grid>

                                            <Grid item xs={12} sx={{ paddingBottom: "1em" }}>

                                                <Grid container direction="row" columnSpacing={4}>

                                                    <Grid item xs={2} >
                                                        <Box sx={{ padding: "8px" }}>
                                                            <EmailIcon fontSize="large" color="primary"></EmailIcon>
                                                        </Box>
                                                    </Grid>

                                                    <Grid item xs={10} >
                                                        <Box sx={{ marginBottom: "8px", marginLeft: "1em" }}>
                                                            <Typography variant="subtitle5" textAlign={"left"} color={theme.palette.contactme_one.contrastText}>
                                                                Email
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ marginLeft: "1em" }}>
                                                            <Typography variant="subtitle4" textAlign={"left"} color={theme.palette.contactme_one.contrastText}>
                                                                firaoltulu5@gmail.com
                                                            </Typography>
                                                        </Box>

                                                    </Grid>

                                                </Grid>

                                            </Grid>

                                            <Grid item xs={12} sx={{}} >

                                                <Grid container direction="row" columnSpacing={4}>

                                                    <Grid item xs={2}>
                                                        <Box sx={{ padding: "8px" }}>
                                                            <LocationOnIcon fontSize="large" color="primary"></LocationOnIcon>
                                                        </Box>
                                                    </Grid>

                                                    <Grid item xs={10} >
                                                        <Box sx={{ marginBottom: "8px", marginLeft: "1em" }}>
                                                            <Typography variant="subtitle5" textAlign={"left"} color={theme.palette.contactme_one.contrastText}>
                                                                Location
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ marginLeft: "1em" }}>
                                                            <Typography variant="subtitle4" textAlign={"left"} color={theme.palette.contactme_one.contrastText}>
                                                                Nifasilk-laft, AA, Ethiopia
                                                            </Typography>
                                                        </Box>

                                                    </Grid>

                                                </Grid>

                                            </Grid>

                                        </Grid>}

                                    </Card>

                                </Grid>

                                <Grid item xs={12} sm={6} md={6} sx={{ paddingLeft: "2em", marginTop: matchesSM ? "5em" : "0em" }} >

                                    <Grid container direction="column">

                                        <Grid item xs={12} sm={6} md={6} sx={{ marginBottom: "1em" }} >
                                            <Typography variant="h6" textAlign={"left"}>
                                                Name
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} sx={{ marginBottom: "1em", borderRadius: "1em" }} >
                                            <TextField disabled={progresson} fullWidth value={contactname} color="contactme_two" name="name" id="name" placeholder="Enter your name." onChange={handlecontactchange} />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={6} sx={{ marginBottom: "1em", }} >
                                            <Typography variant="h6" textAlign={"left"}>
                                                Email
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} sx={{ marginBottom: "1em", }}>
                                            <TextField disabled={progresson} fullWidth value={contactemail} color="contactme_two" name="email" id="email" placeholder="Enter your email." onChange={handlecontactchange} />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={6} sx={{ marginBottom: "1em", }} >
                                            <Typography variant="h6" textAlign={"left"}>
                                                Message
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} sx={{ marginBottom: "1em", }}>
                                            <TextField
                                                disabled={progresson}
                                                name="message"
                                                id="message"
                                                fullWidth
                                                value={contactmessage}
                                                color="contactme_two"
                                                multiline
                                                rows={4}
                                                placeholder="Tell Me abour your project."
                                                onChange={handlecontactchange}
                                            />
                                        </Grid>

                                        {progresson && <Grid item xs={12} sm={6} md={6} sx={{ marginBottom: "1em" }}>
                                            <LinearProgress color="Progress" sx={{
                                                height: 10,
                                                borderRadius: 5,
                                            }} />
                                        </Grid>}

                                        <Grid item xs={12} sm={6} md={6} sx={{}}>
                                            <Button variant="contained" disabled={progresson} fullWidth color="contactme_two" endIcon={<SendIcon />} onClick={handlesubmitcontact}>
                                                Send
                                            </Button>
                                        </Grid>

                                    </Grid>

                                </Grid>


                            </Grid>


                        </Grid>

                    </Grid>

                </Grid >

            </Grid >

            <BootstrapDialog
                fullWidth={true}
                maxWidth={"lg"}
                onClose={handleDialogClose}
                aria-labelledby="customized-dialog-title"
                open={opendialog.open}
                color="portfolio_one"
            >

                <DialogContent dividers color={"portfolio_one"}>

                    <Card sx={{ display: 'flex', maxWidth: "100%", backgroundColor: theme.palette.Dialog.main }}>

                        <Grid container>

                            <Grid item xs={12} md={8}>
                                <Paper
                                    align={"center"}
                                    elevation={12}
                                    sx={{
                                        alignContent: "center",
                                        padding: "1em",
                                        margin: "1em",
                                        borderRadius: "1em",
                                        backgroundColor: opendialog.Portfolio_Index === 0 ? theme.palette.portfolio_one.main : opendialog.Portfolio_Index === 1 ? theme.palette.portfolio_two.main : theme.palette.portfolio_three.main,
                                        "&:hover": {
                                        },
                                    }}>

                                    <CardMedia
                                        component="img"
                                        elevation={12}
                                        sx={{ maxWidth: "700px", minWidth: "250px", ...theme.palette.Dialog_shadows }}
                                        image={portfolio[opendialog.Portfolio_Index].portfolio_image}
                                        alt="portfolio_image"
                                    />
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={4}>

                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                                    <Box sx={{ display: 'flex', alignItems: 'center', ml: "auto", pb: "0em" }}>

                                        {!matchesMD && <IconButton aria-label="next"
                                            sx={{
                                                margin: "6px",
                                                border: "1px solid",
                                                ...theme.palette.Dialog_shadows
                                            }}
                                            autoFocus onClick={handleDialogClose}>
                                            <CloseIcon />
                                        </IconButton>}

                                    </Box>

                                    <CardContent sx={{ flex: '1 0 auto', padding: "1em", paddingTop: "0em" }}>

                                        <Typography variant="h3" align={"center"} sx={{ marginBottom: "0em" }}>
                                            {portfolio[opendialog.Portfolio_Index].title}
                                        </Typography>
                                        <Typography variant="subtitle5" >
                                            {portfolio[opendialog.Portfolio_Index].message}
                                        </Typography>
                                        <br></br>

                                    </CardContent>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: "0em", p: "1em" }}>
                                        <Button variant='outlined' href={portfolio[opendialog.Portfolio_Index].link} target="_blank" sx={{
                                            ...theme.typography.learnButton,
                                            backgroundColor: theme.palette.secondary.main,
                                            fontSize: "0.7rem",
                                            height: 45,
                                            width: 145,
                                            marginTop: "0em",
                                            "&:hover": {
                                                backgroundColor: theme.palette.secondary.light,
                                            },
                                            [theme.breakpoints.down("sm")]: {
                                                marginBottom: "2em",
                                            },
                                        }} autoFocus onClick={handleDialognavigateClose}>
                                            View On Github
                                        </Button>
                                    </Box>

                                </Box>

                            </Grid>

                        </Grid>


                    </Card>

                </DialogContent>

            </BootstrapDialog>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={open_contactme_success}
                onClose={handle_Contactme_dialog_Close}
                key={'bottom' + 'right'}
                autoHideDuration={60000}
            >
                <Alert onClose={handle_Contactme_dialog_Close} severity="success" sx={{ width: '100%' }}>
                    Thank U For Reaching.I will reply as soon as possible.
                </Alert>

            </Snackbar>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={open_contactme_error_one}
                onClose={handle_Contactme_dialog_Close}
                key={'error_one' + 'bottom' + 'right'}
                autoHideDuration={60000}
            >
                <Alert onClose={handle_Contactme_dialog_Close} severity="error" sx={{ width: '100%' }}>
                    Please specify the required fields.
                </Alert>

            </Snackbar>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={open_contactme_error_two}
                onClose={handle_Contactme_dialog_Close}
                key={'error_two' + 'bottom' + 'right'}
                autoHideDuration={60000}
            >
                <Alert onClose={handle_Contactme_dialog_Close} severity="error" sx={{ width: '100%' }}>
                    Something went wrong.Try again.
                </Alert>

            </Snackbar>

        </React.Fragment >

    );

};

export default LandingPage;




