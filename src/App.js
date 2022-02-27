import React from 'react';
import './style/App.less'

import Content from './components/Content';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className='spotify'>
                {/* <div className='home'> */}
                <div className='top'>
                    <Sidebar />
                    <div className='topRight'>
                        <Header />

                        <Content />

                    </div>
                </div>
                <Footer />
            </div>
            {/*  </div> */}
        </Router>
    );
}

export default App;
