import React from 'react';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default AppLayout;
