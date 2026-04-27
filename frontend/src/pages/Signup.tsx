import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { signupUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";


export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{
        firstName?: string;
        lastName?: string;
        gender?: string;
        dob?: string;
        email?: string; 
        password?: string;
    }>({});

    const navigate = useNavigate();

    const signupMutation = useMutation({
        mutationFn: signupUser,
        onSuccess: () => {
            toast.success('User Signed up Successfully');
            navigate('/signin');
        }, 
        onError: (err) => {
            // setName('');
            // setEmail('');
            // setPassword('');
            toast.error(err.message);
        }
    })

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate input 
        if (!firstName || !lastName || !gender || !dob || !email || !password) {
            setErrors({
                firstName: !firstName ? 'First name is required' : undefined,
                lastName: !lastName ? 'Last name is required' : undefined,
                gender: !gender ? 'Gender is required' : undefined,
                dob: !dob ? 'Date of birth is required' : undefined,
                email: !email ? 'Email is required' : undefined,
                password: !password ? 'Password is required' : undefined
            });
            return;
        }

        // Clear errors 
        setErrors({}); 
        const name = `${firstName} ${lastName}`;

        signupMutation.mutate({ firstName, lastName, name, gender, dob, email, password });
    }


    return <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="p-2 text-3xl text-center bg-blue-100 rounded text-white-900 font-bold tracking-tight">YouTube</h1>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign up for your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6" onSubmit={handleSignup}>
                <div>
                    <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
                        First Name
                    </label>
                    <div className="mt-2">
                        <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
                        Last Name
                    </label>
                    <div className="mt-2">
                        <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        required
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
                        Gender
                    </label>
                    <div className="mt-2">
                        <select
                        id="gender"
                        name="gender"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                            <option value="">Select Gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="dob" className="block text-sm/6 font-medium text-gray-900">
                        Date of Birth
                    </label>
                    <div className="mt-2">
                        <input
                        id="dob"
                        name="dob"
                        type="date"
                        value={dob}
                        onChange={e => setDob(e.target.value)}
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                    </label>
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign up
                </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
                I have an account ?{' '}
                <Link to="/signin" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Sign in
                </Link>
            </p>
            </div>
        </div>
    </>
}