import React from 'react';
import Navigation from "../../components/navigation/Navigation";
import {useGlobalContext} from "../../contexts/GlobalContext";
import MainBar from "../../components/appBars/mainBar/MainBar";
import './PageWrapper.scss'

interface PageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({children}) => {
    const {navWidth,appBarHeight} = useGlobalContext();
    return(
        <div>
            <Navigation/>
            <MainBar/>
            <main className={'main-container'} style={{marginLeft: `${navWidth}px`, marginTop:`${appBarHeight}px`}}>
                {children}
            </main>
        </div>
    )
}

export default PageWrapper;