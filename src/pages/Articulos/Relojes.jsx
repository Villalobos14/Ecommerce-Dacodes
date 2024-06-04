import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ArticulosCategoria from '../../components/Articulos/ArticulosCategoria'
import axios from '../../libs/axios'


export default function Relojes() {

    const [relojes, setRelojes] = useState([])

    useEffect(()=>{
        axios.get('/productoRelojes').then(function (response) {
            setRelojes(response.data);
        }).catch(function (err) {
            console.log(err)
        });
    });

    return (
        <div>
            <Navbar/>
                <ArticulosCategoria data={relojes}/>
            <Footer/>
        </div>
    )
}
