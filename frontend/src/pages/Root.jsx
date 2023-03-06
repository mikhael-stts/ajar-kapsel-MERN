import { ThemeProvider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { themeOptions } from "../layouts/theme";

const Root = ({ children }) => {
    return (
        <ThemeProvider theme={themeOptions}>
            <>
                <ResponsiveAppBar></ResponsiveAppBar>
                <main>
                    <Outlet />
                </main>
            </>
        </ThemeProvider>
    );
};

export default Root;
