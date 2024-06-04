import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Home/Main.jsx'
import MasVendidos from '../components/Home/MasVendidos.jsx'
import Footer from '../components/Footer.jsx'
import Reviews from '../components/Home/Reviews.jsx'
import About from '../components/Home/About.jsx'


export default function Home() {
    return (
        <>
            <Navbar/>
            <Main/>
            <MasVendidos/>
            <About/>
            <Reviews/>
            <Footer/>
        </>
    )
}
