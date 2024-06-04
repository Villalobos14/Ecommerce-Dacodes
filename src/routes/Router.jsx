import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Cart from "../pages/Cart.jsx";
import Error from "../pages/Error.jsx";
import ListaArticulos from "../pages/ListaArticulos.jsx";
import Resumen from "../pages/Resumen.jsx";
import Collares from "../pages/Articulos/Collares.jsx";
import Bolsas from "../pages/Articulos/Bolsas.jsx";
import Carteras from "../pages/Articulos/Carteras.jsx";
import Mochilas from "../pages/Articulos/Mochilas.jsx";
import Relojes from "../pages/Articulos/Relojes.jsx";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/articulos" element={<ListaArticulos />} />
                    <Route path="/resumen" element={<Resumen />} />
                    <Route path="/collares" element={<Collares />} />
                    <Route path="/bolsas" element={<Bolsas />} />
                    <Route path="/carteras" element={<Carteras />} />
                    <Route path="/mochilas" element={<Mochilas />} />
                    <Route path="/relojes" element={<Relojes />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
