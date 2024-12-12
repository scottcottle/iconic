import React, {StrictMode} from 'react';
import {createRoot} from "react-dom/client";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {lightTheme} from "./styles/Themes";
import {CssBaseline, ThemeProvider} from "@mui/material";
import GlobalContextProvider from "./contexts/GlobalContext";

const root = createRoot(document.getElementById("root") as Element);
root.render(
    <StrictMode>

        <GlobalContextProvider>
            <ThemeProvider theme={lightTheme}>
                <BrowserRouter>
                    <CssBaseline/>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </GlobalContextProvider>
    </StrictMode>

);