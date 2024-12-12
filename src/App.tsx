import React from 'react';
import PageWrapper from "./pages/pageWrapper/PageWrapper";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Organization from "./pages/organization/Organization";

const App = () => {

    return <PageWrapper>

        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/*" element={ <Home/> } />
            <Route path="/organization" element={ <Organization/> } />
            <Route path="/about" element={ <About/> } />

        </Routes>
    </PageWrapper>;
};
export default App;