import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

import Home from './pages/home';
import PropertyDetail from './pages/propertyDetail';
import Header from "./components/global/header.jsx";
import Footer from "./components/global/footer.jsx";

const App = () => {

    function ScrollToTop() {
        const {pathname} = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }

    return (
        <Router>
            <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/property/:id" element={<PropertyDetail/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
