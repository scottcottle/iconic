import React from "react";
import {
    AppBar,
    Divider,
    Drawer, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import {Iconic} from "../iconic/Iconic";
import {Link,} from "react-router-dom";
import {useGlobalContext} from "../../contexts/GlobalContext";
import './Navigation.scss'
import {ChevronLeft} from "@mui/icons-material";

interface NavigationProps {}

const navList = [
    {
        label: 'Home',
        path: '/',
        icon: <Iconic icon={'home'} type={'mui'} size={'32px'}/>,
    },
    {
        label: 'Organization',
        path: '/organization',
        icon: <Iconic icon={'people'} type={'mui'} size={'32px'}/>,
    },
    {
        label: 'About',
        path: '/about',
        icon: <Iconic icon={'hiking'} type={'mui'} size={'32px'}/>,
    },
]

const Navigation: React.FC<NavigationProps> =() => {
    const {navOpen, setNavOpen, navWidth, setNavWidth} = useGlobalContext();


    const handleDrawerClose =()=> {
        setNavOpen(false);
        setNavWidth(0);
    }

    return<Drawer className={"navigation"} sx={{width: navWidth, flexShrink: 0, '& .MuiDrawer-paper': {width: navWidth}}} variant={'persistent'} anchor={'left'} open={navOpen}>
            <AppBar position={'static'} sx={{backgroundColor:'appBar.main'}} elevation={1}>
                <Toolbar sx={{color:'appBar.dark'}}>
                    <div className={"header-container"}>
                        <div className={'icon-wrapper'}>
                            <Iconic icon={'hub'} size={'100%'} type={'mui'} color={'white'}/>
                        </div>
                        <div className={'logo-text'}>Iconic</div>
                        <div className={'slide-button'}>
                            <IconButton onClick={handleDrawerClose}><ChevronLeft/></IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        <Divider/>
        <List>
            {navList.map((item,index) => (

                <ListItemButton key={`${item.label}-${index}`} component={props => <Link {...props} to={item.path} />}>
                <ListItem disablePadding>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label}/>
                </ListItem>
            </ListItemButton>
            ))}
        </List>
    </Drawer>
}

export default Navigation;