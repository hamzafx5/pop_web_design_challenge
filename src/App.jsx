import CssBaseline from "@mui/material/CssBaseline";
import Profile from "./pages/Profile";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Profile />
        </ThemeProvider>
    );
}
