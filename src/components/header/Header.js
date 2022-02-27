import React from 'react';
import '../../style/Header.less'
import { Icon } from '../Icons'
import { useLocation } from 'react-router-dom'

import ActiveAccount from './ActiveAccount';
import CollectionHeader from './CollectionHeader';
import HomeHeader from './HomeHeader';
import SerachHeader from './SearchHeader';
import StrollButtons from './StrollButtons';


function Header() {
    const location = useLocation();
    const headerMidSwitch = () => {
        switch (location.pathname) {
            case "/":
                return <HomeHeader />
            case "/search":
                return <SerachHeader />
            case "/collection":
                return <CollectionHeader />
            case ((location.pathname).includes("/playlist") ? (location.pathname) : ""):
                return <CollectionHeader />
            default:
                return <HomeHeader />
        }
    }
    return (
        <>
            {/* //-- header 300px arka plan. scrollbar altında kaldı görünmedi            
                <div className='headerTransparanAbsolute'></div> */}
            <div className='header'>
                <div className='headerContainer'>
                    <StrollButtons />
                    <div className='middleDiv'>
                        {headerMidSwitch()}
                    </div>
                    <ActiveAccount />
                </div>
            </div>
        </>
    );
}

export default Header;
