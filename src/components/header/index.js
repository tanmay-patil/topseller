import React from 'react';
import TopNavBar from './topnavbar';
import BrandSection from './brandSection/index';
import BottomNavbar from './bottomNavBar';
const Header = () => {
    return (    
        <div className="header">
            <TopNavBar />
            <BrandSection />
            <BottomNavbar />
        </div>
    );
};
export default Header;