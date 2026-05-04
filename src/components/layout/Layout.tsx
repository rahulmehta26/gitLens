import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet, useLocation } from 'react-router'

const Layout = () => {

    const { pathname } = useLocation();

    const homePage = pathname === "/";

    return (
        <main
            className='relative h-screen'
        >

            <Header />

            <Outlet />

            {
                homePage && <Footer />
            }

        </main>
    )
}

export default Layout