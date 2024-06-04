const incentives = [
    {
        name: 'Envio gratis',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "El envio cuenta con un costo extra",
    },
    {
        name: '15 días de garantía',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: " Por cualquier tipo de daño los primeros 15 dias cuentas con la garantía.",
    },
    {
        name: 'Cambios',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
            " Si quieres realizar el cambio comunicate directamente con la dueña.",
    },
]

export default function About() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                        Construimos nuestro negocio sobre la base del servicio al cliente.
                        </h2>
                        <p className="mt-4 text-gray-500">
                        Esto fue un emprendimiento para poder generar ganancias y poder realizar las ventas de mis productos. Decidimos emprender nuestro negocio sobre la base a la venta de el cliente.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                        {incentives.map((incentive) => (
                            <div key={incentive.name} className="sm:flex lg:block">
                                <div className="sm:flex-shrink-0">
                                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
