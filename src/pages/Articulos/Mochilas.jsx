import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ArticulosCategoria from '../../components/Articulos/ArticulosCategoria'
import axios from '../../libs/axios'


export default function Mochilas() {

    const [mochilas, setMochilas] = useState([])

    useEffect(()=>{
        axios.get('/productoMochilas').then(function (response) {
            setMochilas(response.data);
        }).catch(function (err) {
            console.log(err)
        });
    });

    return (
        <div>
            <Navbar/>
                <ArticulosCategoria data={mochilas}/>
            <Footer/>
        </div>
    )
}
