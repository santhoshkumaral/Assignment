import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

const DarkMode = () => {
    const [theme, SetTheme] = useState("light-theme");
    useEffect(() => {
        //light-theme getting form index.html body tag
        document.body.className = theme;
    }, [theme]);
    const togggleTheme = () => {
        theme === "light-theme" ? SetTheme("dark-theme") : SetTheme("light-theme");
    };

    return (
        <>
            <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={togggleTheme}
            >
                ToggleTheme
            </Button>
        </>
    );
};
export default DarkMode;


