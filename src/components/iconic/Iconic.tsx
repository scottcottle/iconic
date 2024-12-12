// @ts-nocheck
import React from 'react'

import {ReactComponent as Work} from '../../assets/img/iconic-work.svg'
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import MenuIcon from '@mui/icons-material/Menu';
import HikingIcon from '@mui/icons-material/Hiking';
import HubIcon from '@mui/icons-material/Hub';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import './iconic.scss';

interface iconicProps {
    icon: string;
    type?: string;
    size?: string;
    color?: string;
}

export const Iconic: React.FC<iconicProps> = ({icon, color, type='icon', size = '16px'})=>{
    const iconList = {
       work: <Work fill={color || '#424242'}/>,
    }
    const muiList = {
        hiking: <HikingIcon sx={{fontSize: size, color:color || 'black'}}/>,
        home: <HomeIcon sx={{fontSize: size, color:color || 'black'}}/>,
        hub: <HubIcon sx={{fontSize: size, color:color || 'black'}}/>,
        menu: <MenuIcon sx={{fontSize: size, color:color || 'black'}}/>,
        people: <PeopleAltIcon sx={{fontSize: size, color:color || 'black'}}/>,
        work: <WorkIcon sx={{fontSize: size, color:color || 'black'}}/>,
    }
    switch (type) {
        case 'icon':
        return (<div className={"iconic-icon"} style={{height: size, width: size}}>
            {iconList[icon as keyof typeof iconList]}
        </div>)
        case 'mui':
            return (<div className={"iconic-icon"} style={{height: size, width: size}}>
                {muiList[icon as keyof typeof muiList]}
            </div>)

    }

};