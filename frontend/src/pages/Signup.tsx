import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { signupUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  gender?: string;
  dob?: string;
  email?: string;
  password?: string;
}

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});

  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("User signed up successfully");
      navigate("/signin");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Signup failed"
      );
    },
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!gender) {
      newErrors.gender = "Gender is required";
    }

    if (!dob) {
      newErrors.dob = "Date of birth is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    signupMutation.mutate({
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
      gender,
      dob,
      email,
      password,
    });
  };

  return (
    <div className="grid grid-cols-2">
        <div className="hidden md:block md:col-span-1">
            <img src="https://plus.unsplash.com/premium_photo-1683287925874-f8b46c6437ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-1 min-h-screen px-2 py-2 lg:px-2 flex justify-center items-center">
            <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold text-gray-900">Sign up for your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="grid grid-cols-2 gap-4" onSubmit={handleSignup}>
                        {/* First Name */}
                        <div className="col-span-1">
                            <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-900"
                            >
                            First Name
                            </label>

                            <div className="mt-2">
                            <input
                                id="firstName"
                                type="text"
                                autoComplete="given-name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-600 focus:outline-none"
                            />
                            </div>

                            {errors.firstName && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.firstName}
                            </p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="col-span-1">
                            <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-900"
                            >
                            Last Name
                            </label>

                            <div className="mt-2">
                            <input
                                id="lastName"
                                type="text"
                                autoComplete="family-name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-600 focus:outline-none"
                            />
                            </div>

                            {errors.lastName && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.lastName}
                            </p>
                            )}
                        </div>

                        {/* Gender */}
                        <div className="col-span-1">
                            <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-gray-900"
                            >
                            Gender
                            </label>

                            <div className="mt-2">
                            <select
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-600 focus:outline-none"
                            >
                                <option value="">Select Gender</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>
                            </select>
                            </div>

                            {errors.gender && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.gender}
                            </p>
                            )}
                        </div>

                        {/* Date of Birth */}
                        <div className="col-span-1">
                            <label
                            htmlFor="dob"
                            className="block text-sm font-medium text-gray-900"
                            >
                            Date of Birth
                            </label>

                            <div className="mt-2">
                            <input
                                id="dob"
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-600 focus:outline-none"
                            />
                            </div>

                            {errors.dob && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.dob}
                            </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="col-span-2">
                            <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-900"
                            >
                            Email Address
                            </label>

                            <div className="mt-2">
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-600 focus:outline-none"
                            />
                            </div>

                            {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email}
                            </p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="col-span-2">
                            <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-900"
                            >
                            Password
                            </label>

                            <div className="mt-2">
                            <input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-600 focus:outline-none"
                            />
                            </div>

                            {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password}
                            </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-2">
                            <button
                            type="submit"
                            disabled={signupMutation.isPending}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                            {signupMutation.isPending
                                ? "Signing up..."
                                : "Sign Up"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link
                        to="/signin"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        Sign in
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}