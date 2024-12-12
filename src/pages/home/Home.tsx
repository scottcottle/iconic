import React, {useEffect} from 'react';
import {useGlobalContext} from "../../contexts/GlobalContext";

interface HomeProps {}

const Home: React.FC<HomeProps> = () =>{
    const {setPageTitle} = useGlobalContext();

    useEffect(()=>{
        setPageTitle("Home")
    })


    return <div>Home Page</div>
}
export default Home;