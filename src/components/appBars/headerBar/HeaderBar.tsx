import React from "react";
import {useGlobalContext} from "../../../contexts/GlobalContext";
import {Toolbar, Typography} from "@mui/material";
import './HeaderBar.scss'

interface HeaderBarProps {}

const HeaderBar: React.FC<HeaderBarProps> = ()=> {
    const {pageTitle, navWidth} = useGlobalContext();

    return (
        <div>
            <Toolbar className={'header-bar'}  sx={{backgroundColor:'primary.main', color: 'primary.light', marginLeft:`${navWidth}px`}}>
                <Typography variant={'h3'}>{pageTitle}</Typography>
            </Toolbar>
        </div>


    )
}

export default HeaderBar;