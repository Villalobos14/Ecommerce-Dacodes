import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ArticulosCategoria from '../../components/Articulos/ArticulosCategoria'
import axios from '../../libs/axios'


export default function Bolsas() {
    const [bolsas, setBolsas] = useState([])

    useEffect(()=>{
        axios.get('/productobolsa').then(function (response) {
            setBolsas(response.data);
        }).catch(function (err) {
            console.log(err)
        });
    })

    return (
        <div>
            <Navbar/>
                <ArticulosCategoria data={bolsas}/>
            <Footer/>
        </div>
    )
}
