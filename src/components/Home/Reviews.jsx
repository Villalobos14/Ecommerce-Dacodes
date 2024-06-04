import { StarIcon } from '@heroicons/react/20/solid'

const reviews = {
    average: 4,
    totalCount: 480,
    counts: [
        { rating: 5, count: 320 },
        { rating: 4, count: 120 },
        { rating: 3, count: 22 },
        { rating: 2, count: 15 },
        { rating: 1, count: 3 },
    ],
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
        <p> Me gusta mucho el manejo que tienen con los clientes y la atencion que me han brindado.</p>
      `,
            author: 'José Luis Ruiz Sánchez',
            avatarSrc:
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            rating: 5,
            content: `
        <p>Sinceramente me gusta mucho la atencion que le otorgan a los clientes.</p>
      `,
            author: 'María Fernanda López Hernández',
            avatarSrc:
                'https://images.unsplash.com/photo-1525563092259-168dfa71ab3c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            rating: 5,
            content: `
        <p>Me agrada mucho la calidad que manejan los productos y que cuentan con muy buenos precios.</p>
      `,
            author: 'Juan Pablo Gómez Pérez',
            avatarSrc:
                'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Reviews() {
    return (
        <div className="bg-white border-t">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-32 lg:px-8">
                <div className="lg:col-span-4">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Reseñas</h2>

                    <div className="mt-3 flex items-center">
                        <div>
                            <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                            'flex-shrink-0 h-5 w-5'
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <p className="sr-only">{reviews.average} out of 5 stars</p>
                        </div>
                        <p className="ml-2 text-sm text-gray-900">Basado en {reviews.totalCount} reseñas</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="sr-only">Data</h3>
                        <dl className="space-y-3">
                            {reviews.counts.map((count) => (
                                <div key={count.rating} className="flex items-center text-sm">
                                    <dt className="flex flex-1 items-center">
                                        <p className="w-3 font-medium text-gray-900">
                                            {count.rating}
                                            <span className="sr-only"> Reseñas</span>
                                        </p>
                                        <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                                            <StarIcon
                                                className={classNames(
                                                    count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                                                    'flex-shrink-0 h-5 w-5'
                                                )}
                                                aria-hidden="true"
                                            />

                                            <div className="relative ml-3 flex-1">
                                                <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                                                {count.count > 0 ? (
                                                    <div
                                                        className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                                        style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                                                    />
                                                ) : null}
                                            </div>
                                        </div>
                                    </dt>
                                    <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                                        {Math.round((count.count / reviews.totalCount) * 100)}%
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-lg font-medium text-gray-900">Comparte tus pensamientos</h3>
                        <p className="mt-1 text-sm text-gray-600">
                        Si has utilizado este producto, comparte tus opiniones con otros clientes
                        </p>
                    </div>
                </div>

                <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
                    <h3 className="sr-only">Recent reviews</h3>

                    <div className="flow-root">
                        <div className="-my-12 divide-y divide-gray-200">
                            {reviews.featured.map((review) => (
                                <div key={review.id} className="py-12">
                                    <div className="flex items-center">
                                        <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 object-cover rounded-full" />
                                        <div className="ml-4">
                                            <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                                            <div className="mt-1 flex items-center">
                                                {[0, 1, 2, 3, 4].map((rating) => (
                                                    <StarIcon
                                                        key={rating}
                                                        className={classNames(
                                                            review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                            'h-5 w-5 flex-shrink-0'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                ))}
                                            </div>
                                            <p className="sr-only">{review.rating} out of 5 stars</p>
                                        </div>
                                    </div>

                                    <div
                                        className="mt-4 space-y-6 text-base italic text-gray-600"
                                        dangerouslySetInnerHTML={{ __html: review.content }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
