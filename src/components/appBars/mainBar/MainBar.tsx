import React from "react";
import {useGlobalContext} from "../../../contexts/GlobalContext";
import {AppBar, IconButton, Toolbar} from "@mui/material";
import {Iconic} from "../../iconic/Iconic";
import HeaderBar from "../headerBar/HeaderBar";

interface MainBarProps {}

const MainBar: React.FC<MainBarProps> = ()=> {
    const {setNavOpen, setNavWidth} = useGlobalContext();
    const handleDrawerOpen = () => {
        setNavOpen(true);
        setNavWidth(240);
    }
    return (
        <AppBar sx={{backgroundColor: 'appBar.main'}} elevation={0}>
            <Toolbar sx={{color: 'appBar.dark'}}>
                <IconButton color={'inherit'} aria-label={'open drawer'} onClick={handleDrawerOpen} edge={'start'} sx={[{mr: 2,}]}>
                    <Iconic icon={'menu'} type={'mui'}/>
                </IconButton>
            </Toolbar>
            <HeaderBar/>
        </AppBar>
    )
}

export default MainBar;