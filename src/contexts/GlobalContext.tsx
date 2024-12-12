import React, {Context, createContext, useContext, useEffect} from 'react';
import {Theme, useMediaQuery, useTheme} from "@mui/material";
import axios from 'axios';

interface GlobalContextProps {children:any}

interface ContextType{
    navOpen: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
    appBarHeight: number;
    setAppBarHeight: React.Dispatch<React.SetStateAction<number>>
    navWidth:number;
    setNavWidth: React.Dispatch<React.SetStateAction<number>>
    pageTitle: string;
    setPageTitle: React.Dispatch<React.SetStateAction<string>>
    contacts: any;
    setContacts: React.Dispatch<React.SetStateAction<any>>
}

const GlobalContext:Context<ContextType> = createContext<ContextType>({
    navOpen: true,
    setNavOpen:()=>{},
    appBarHeight: 128,
    setAppBarHeight: () =>{},
    navWidth: 240,
    setNavWidth: () =>{},
    pageTitle: "",
    setPageTitle: () =>{},
    contacts: [],
    setContacts: () =>{},
})

const GlobalContextProvider: React.FC<GlobalContextProps> = ({children}:GlobalContextProps) => {
    const [navOpen, setNavOpen] = React.useState<boolean>(true);
    const [appBarHeight, setAppBarHeight] = React.useState<number>(128);
    const [navWidth, setNavWidth] = React.useState<number>(240);
    const [pageTitle, setPageTitle] = React.useState<string>("");
    const [contacts, setContacts] = React.useState<any>([]);
    const theme:Theme = useTheme();
    const matches:boolean = useMediaQuery(theme.breakpoints.up('sm'))

    useEffect(()=>{
        setAppBarHeight(matches?128:112)
    }, [matches]);


    useEffect(()=>{
        if(contacts.length <= 0){
            try{
                axios.get(`https://jsonplaceholder.typicode.com/users`)
                    .then(res => {
                        setContacts(res.data)
                    })
            }catch(err){
                console.error(err)
            }
        }
    },[contacts]);

    return(
            <GlobalContext.Provider value={{navOpen, setNavOpen, appBarHeight, setAppBarHeight, navWidth,setNavWidth, pageTitle, setPageTitle, contacts, setContacts }}>
                {children}
            </GlobalContext.Provider>
        )


}


export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalContextProvider;