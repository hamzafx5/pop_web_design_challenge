import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Steradian, 'Public Sans', 'sans-serif'",
    },
    palette: {
        secondary: {
            light: "#4E3131",
            main: "#4E3131",
            dark: "#4E3131",
            contrastText: "white",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: "Steradian";
                    src: url("/fonts/steradian/Steradian-Md.woff2");
                    font-weight: 500;
                    font-display: swap;
                    font-style: normal;
                }
                @font-face {
                    font-family: "Steradian";
                    src: url("/fonts/steradian/Steradian-Rg.woff2");
                    font-weight: 400;
                    font-display: swap;
                    font-style: normal;
                }
            `,
        },
    },
});

export default theme;
