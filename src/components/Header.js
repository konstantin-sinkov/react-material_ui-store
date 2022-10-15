import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

const Header = () => {
    //Typography - simple text, IconButton - wrap for Icons
    
    return (
        <AppBar
            position={"static"}
        >
            <Toolbar>
                <Typography
                    variant={"h6"}
                    component={"span"}
                    sx={{flexGrow: 1}}
                >
                    Mini shop
                </Typography>
                <IconButton
                    color={"inherit"}
                >
                    <ShoppingBasket />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export {Header};
