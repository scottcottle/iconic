// @ts-nocheck
import {createTheme} from "@mui/material";

export const lightTheme:Theme = createTheme({

    palette: {
        primary: {
            light: "#ffffff",
            main: "#1a3673",
            dark: "#424242"
        },
        secondary: {
            light: "#f9f9f9",
            main: "#424242",
            dark: "#424242"
        },
        appBar:{
          main:'#f9f9f9',
          dark:'#424242'
        },
        colors:{
            subToolbar: "#333333",
            hover: "#333333",
            hoverText: "#ffffff",
            listBar: "#e3e3e3",
        }
    },

    typography: {
        fontFamily: ["Roboto"],
        fontSize: 16,
        lineHeight: "20px",
        h1: {
            fontSize: 42,
            lineHeight: "48px"
        },
        h2: {
            fontSize: 36,
            lineHeight: "42px"
        },
        h3: {
            fontSize: 24,
            lineHeight: "30px"
        },
        h4: {
            fontSize: 20,
            lineHeight: "24px"
        },
        h5: {
            fontSize: 16,
            lineHeight: "20px"
        },
        body1: {
            fontSize: 16,
            lineHeight: "22px"
        },
        body2: {
            fontSize: 11,
            lineHeight: "15px"
        },
    },
})