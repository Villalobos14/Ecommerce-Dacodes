import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ArticulosCategoria from '../../components/Articulos/ArticulosCategoria'
import axios from '../../libs/axios'


export default function Collares() {

    const [collares, setCollares] = useState([])

    useEffect(()=>{
        axios.get('/productoCollares').then(function (response) {
            setCollares(response.data);
        }).catch(function (err) {
            console.log(err)
        });
    })
    return (
        <div>
            <Navbar/>
                <ArticulosCategoria data={collares}/>
            <Footer/>
        </div>
    )
}
