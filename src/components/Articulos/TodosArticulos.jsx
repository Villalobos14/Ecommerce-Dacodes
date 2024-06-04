import { useEffect, useState } from "react";
import Notificacion from "../Notificaciones/Notificacion";

export default function TodosArticulos(props) {

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [mandaNoti, setMandaNoti] = useState(false);

    useEffect(() => {
        setProductos(props.productos);
    }, [props]);

    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem("cart")) || [];
        setCarrito(prevCarrito => (carritoGuardado.length > 0 ? carritoGuardado : prevCarrito));
    }, []);


    const handleAdd = (producto) => {
        const existingProduct = carrito.find((item) => item.id === producto.id && item.nombre === producto.nombre);
        if (existingProduct) {
            const updatedCart = carrito.map((item) =>
                item.id === producto.id && item.nombre === producto.nombre ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            setCarrito(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setMandaNoti(true);
            setTimeout(() => {
                setMandaNoti(false);
            }, 1500);
        } else {
            const newCart = [...carrito, { ...producto, cantidad: 1 }];
            setCarrito(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
            setMandaNoti(true);
            setTimeout(() => {
                setMandaNoti(false);
            }, 1500);
        }
    };


    return (
        <div className="bg-white">
            <Notificacion addItem={mandaNoti} />
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {productos.map((producto, index) => (
                        <div key={index}>
                            <div className="relative">
                                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                    <img
                                        src={`/articulos/${producto.foto}.jpg`}
                                        alt={producto.nombre}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="relative mt-4">
                                    <h3 className="text-sm font-medium text-gray-900">{producto.nombre}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{producto.marca}</p>
                                    <p className="mt-1 text-sm text-gray-500">{producto.modelo}</p>
                                </div>
                                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                    />
                                    <p className="relative text-lg font-semibold text-white">${producto.precio}.00</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <a
                                    onClick={() => handleAdd(producto)}
                                    className="cursor-pointer relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                >
                                    Apartar <span className="sr-only">, {producto.nombre}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
