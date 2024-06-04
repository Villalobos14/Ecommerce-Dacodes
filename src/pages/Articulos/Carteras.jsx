import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ArticulosCategoria from '../../components/Articulos/ArticulosCategoria'
//import axios from '../../libs/axios'


export default function Carteras() {
    const [carteras, setCarteras] = useState([])

    useEffect(()=>{
        axios.get('/productocarteras').then(function (response) {
            setCarteras(response.data);
        }).catch(function (err) {
            console.log(err)
        });
    })
    return (
        <div>
            <Navbar/>
                <ArticulosCategoria data={carteras}/>
            <Footer/>
        </div>
    )
}
