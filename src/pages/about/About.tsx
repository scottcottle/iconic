import React, {useEffect} from 'react';
import {useGlobalContext} from "../../contexts/GlobalContext";

interface AboutProps {}

const About: React.FC<AboutProps> = () =>{
    const {setPageTitle} = useGlobalContext();

    useEffect(()=>{
        setPageTitle("About")
    })
    return <div>All you need to know is I Am Awesome!</div>
}
export default About;