import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


export default function Formulario() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState(false);

    const validateName = (name) => {
        const regexName = /^.{3,}$/;
        return regexName.test(name);
    };

    const validateEmail = (email) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    };

    const validatePhone = (phone) => {
        const regexPhone = /^\d{10}$/;
        return regexPhone.test(phone);
    };

    const validatePassword = (password) => {
        const regexPassword = /^.{8,}$/;
        return regexPassword.test(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (
            validateName(user.name) &&
            validateName(user.lastname) &&
            validateEmail(user.email) &&
            validatePhone(user.phone) &&
            validatePassword(user.password) &&
            user.password === user.confirmPassword
        ) {
            navigate("/")
        } else { 
            setError(true);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setError(false);
    };


    return (
        <>
            <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#F9FAFB]">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div>
                        <a href='/'>
                            <ArrowLeftIcon className='h-5 w-auto text-gray-600 cursor-pointer hover:animate-pulse hover:scale-110 duration-300' />
                        </a>
                        <img
                            className="mx-auto h-20 w-auto"
                            src="/aga.webp"
                            alt="aga-logo"
                        />
                    </div>
                    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-[#322017]">
                        Ingresa en tu cuenta
                    </h2>
                </div>
                <div className="mt-4 p-16 sm:mx-auto sm:w-full sm:max-w-lg  rounded-md bg-white border-[0.1px] shadow-lg">
                    <form className="space-y-6" onSubmit={handleRegister}>
                        <div className="flex justify-between items-center">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nombre
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Apellido
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        autoComplete="lastname"
                                        required
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Correo electrónico
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Número telefónico
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="phone"
                                        required
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contraseña
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirmar tu contraseña
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="confirmPassword"
                                    required
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#322017] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4a372d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300"
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>

                    {error ? (
                        <ErrorMessage />
                    ) : null}
                </div>
                <p className="mt-4 text-center text-sm text-gray-500">
                    ¿Ya tienes una cuenta?{'  '}
                    <a href="/login" className="font-semibold leading-6 text-[#322017] hover:text-[#4a372d]">
                        Inicia sesión aquí
                    </a>
                </p>
            </div>
        </>
    )
}

function ErrorMessage() {
    return (
        <div className="rounded-md bg-red-50 p-4 mt-2">
            <div className="flex">
                <div className="flex-shrink-0">
                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error al registrarse</h3>
                    <div className="mt-2 text-sm text-red-700">
                        <ul role="list" className="list-disc space-y-1 pl-5">
                            <li>Usuario o contraseña no válidos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}