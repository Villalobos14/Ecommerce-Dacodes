import { useEffect, useState } from "react";
//import axios from "../../libs/axios";


export default function MasVendidos() {

    const [masVendidos, setMasVendidos] = useState([])

    useEffect(()=>{
        axios.get('/productocollares').then(function (response) {
            setMasVendidos(response.data);
        }).catch(function (err) {
            console.log(err)
        });
    })
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-[#322017]">Recomendaciones para ti</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {masVendidos.slice(1, 5).map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={`/articulos/${product.foto}.jpg`}
                                    alt={product.foto}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.nombre}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.modelo}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.precio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
