import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import TodosArticulos from '../components/Articulos/TodosArticulos'
import Footer from '../components/Footer'
import axios from '../libs/axios'

export default function ListaArticulos() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        Promise.all([
            axios.get('/productobolsa'),
            axios.get('/productoMochilas'),
            axios.get('/productoCollares'),
            axios.get('/productocarteras'),
            axios.get('/productoRelojes')
        ])
            .then(function (responses) {
                const productosUnificados = responses.reduce((acc, response) => acc.concat(response.data), []);
                setProductos(productosUnificados);
            })
            .catch(function (err) {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Navbar />
            <TodosArticulos productos={productos} />
            <Footer />
        </>
    )
}
