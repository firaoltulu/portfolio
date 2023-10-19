import { createTheme } from '@mui/material/styles';


const certifications_color = "#9c9c9c";
const contact_video_card_color = "#808080";
const portfolio_four_color = "#252c8b";
const portfolio_Game_one_color = "#670303";
const portfolio_EA_two_color = "#7a7e04";
const portfolio_EA_one_color = "#530360";
const float_header_color = "rgba(41, 1, 82, .15)";
const portfolio_image_color_two = "#ebddf9";
const portfolio_image_color = "#ebddf9";
const progress_color = "#045a15";
const dialog_color = "#ffffff";
const header_color = "#2b5358";
const footer_two_color = "#4f4d55";
const footer_color = "#e5d8f6";
const contactme_two_color = "#301684";
const contactme_one_color = "#301684";
const portfolio_three_color = "#a44e2f";
const portfolio_two_color = "#379155";
const portfolio_one_color = "#babeff";
const workexperience = "#010539";
const buttonfocuscolor = "#c1fcb4";
const headercolor = "#1b1d3f";
const secondcolor = "#374434";


export default createTheme({
    palette: {
        mode: "light",

        primary: {
            main: "#f4fcf3",
            light: "#e2e3f4",
            dark: "#1565c0",
            contrastText: headercolor
        },

        secondary: {
            main: secondcolor,
            light: "#11154a",
            dark: "#7b1fa2",
            contrastText: secondcolor
        },

        error: {
            main: "#d32f2f",
            light: "#ef5350",
            dark: "#c62828",
            contrastText: "#fff"
        },

        warning: {
            main: "#ed6c02",
            light: "#ff9800",
            dark: "#e65100",
            contrastText: "#fff"
        },

        info: {
            main: "#0288d1",
            light: "#03a9f4",
            dark: "#01579b",
            contrastText: "#fff"
        },

        success: {
            main: "#2e7d32",
            light: "#4caf50",
            dark: "#1b5e20",
            contrastText: "#fff"
        },

        grey: {
            "50": "#fafafa",
            "100": "#f5f5f5",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121",
            "A100": "#f5f5f5",
            "A200": "#eeeeee",
            "A400": "#bdbdbd",
            "A700": "#616161"
        },

        contrastThreshold: 3,
        tonalOffset: 0.2,

        text: {
            "primary": headercolor,
            "secondary": headercolor,
            "disabled": headercolor
        },

        divider: "#01087b",

        background: {
            "paper": "#fff",
            "default": "#fff"
        },

        action: {
            "active": "rgba(0, 0, 0, 0.54)",
            "hover": buttonfocuscolor,
            "hoverOpacity": 0.1,
            "selected": "rgba(0, 0, 0, 0.08)",
            "selectedOpacity": 0.08,
            "disabled": "rgba(0, 0, 0, 0.26)",
            "disabledBackground": "rgba(0, 0, 0, 0.12)",
            "disabledOpacity": 0.38,
            "focus": buttonfocuscolor,
            "focusOpacity": 0.12,
            "activatedOpacity": 0.12
        },

        buttons1: {
            main: headercolor,
            light: "#5f007e",
            dark: "#7b1fa2",
            contrastText: headercolor
        },
        work_experience: {
            main: workexperience,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#ffffff"

        },
        portfolio: {
            main: "#ffffff",
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#efefef"
        },
        portfolio_one: {
            main: portfolio_one_color,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#efefef"
        },
        portfolio_two: {
            main: portfolio_two_color,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#ffffff"
        },
        portfolio_three: {
            main: portfolio_three_color,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#ffffff"
        },
        contactme_one: {
            main: contactme_one_color,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#ffffff"
        },
        contactme_two: {
            main: contactme_two_color,
            light: "#7648e0",
            dark: "#26017c",
            contrastText: "#ffffff"
        },
        footer: {
            main: footer_color,
            light: "#7648e0",
            dark: "#26017c",
            contrastText: "#ffffff"
        },
        footer_two: {
            main: footer_two_color,
            light: "#7648e0",
            dark: "#26017c",
            contrastText: "#ffffff"
        },
        header: {
            main: header_color,
            light: "#7648e0",
            dark: "#26017c",
            contrastText: "#ffffff"
        },
        Dialog: {
            main: dialog_color,
            border: "#ffffff",
            light: "#7648e0",
            dark: "#26017c",
            contrastText: "#ffffff"
        },
        Dialog_shadows: {
            boxShadow: "-5px 5px 101px 27px #2D2D2A"
        },
        Progress: {
            main: progress_color,
            border: "#ffffff",
            light: "#7648e0",
            dark: "#26017c",
            contrastText: "#ffffff"
        },
        portfolio_photo: {
            main: portfolio_image_color,
            border: "#ffffff",
            light: "#7648e0",
            dark: "#26017c",
            contrastText: "#ffffff"

        },
        portfolio_photo_two: {
            main: portfolio_image_color_two,
            border: "#ffffff",
            light: "#7648e0",
            dark: "#26017c",
            contrastText: "#ffffff"
        },
        float_header: {
            main: float_header_color,
            border: "#ffffff",
            light: "#7648e0",
            dark: "#26017c",
            contrastText: "#ffffff"
        },
        portfolio_EA_one: {
            main: portfolio_EA_one_color,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#efefef"
        },
        portfolio_EA_two: {
            main: portfolio_EA_two_color,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#ffffff"
        },
        portfolio_Game_one: {
            main: portfolio_Game_one_color,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#ffffff"
        },
        portfolio_four: {
            main: portfolio_four_color,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#ffffff"
        },
        contact_video_card: {
            main: contact_video_card_color,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#ffffff"
        },
        certifications: {
            main: certifications_color,
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#ffffff"
        }



    },
    typography: {

        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            color: headercolor,
            fontSize: "1rem",
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            lineHeight: 1.5,
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",

        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            fontWeight: 700,
        },
        h6: {
            fontWeight: 800,
            fontFamily: "Raleway",
            // color: headercolor,
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
        },
        subtitle3: {
            fontWeight: 200,
            fontSize: "1rem",
        },
        subtitle4: {
            fontWeight: 200,
            fontSize: "0.91rem",
        },
        subtitle5: {
            fontWeight: 600,
            fontSize: "1rem",
            fontFamily: "Raleway",
        },
        subtitle6: {
            fontFamily: "Pacifico",
            fontSize: "1.5rem",

        },
        button: {
            fontWeight: 500,
            fontFamily: "Raleway",
            // color: headercolor,
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "0.9rem",
            textTransform: "none",
        },
        learnButton: {
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",

        },

    }

});


