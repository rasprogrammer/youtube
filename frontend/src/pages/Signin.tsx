import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signinUser } from "../api/auth";

interface SigninPayload {
  email: string;
  password: string;
}

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signinMutation = useMutation({
    mutationFn: (data: SigninPayload) => signinUser(data),

    onSuccess: (data: any) => {
      console.log('data > ', data);
      localStorage.setItem("token", data.token);

      toast.success("Signed in successfully");

      setEmail("");
      setPassword("");

      navigate("/home");
    },

    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to sign in";

      toast.error(message);
    },
  });

  const handleSignin = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Email and Password are required");
      return;
    }

    signinMutation.mutate({
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
                <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                    onSubmit={handleSignin}
                    className="space-y-6"
                    >
                    {/* Email */}
                    <div>
                        <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900"
                        >
                        Email address
                        </label>

                        <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) =>
                            setEmail(e.target.value)
                            }
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-900"
                        >
                        Password
                        </label>

                        <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) =>
                            setPassword(e.target.value)
                            }
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                        type="submit"
                        disabled={signinMutation.isPending}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                        {signinMutation.isPending
                            ? "Signing In..."
                            : "Sign In"}
                        </button>
                    </div>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        Sign Up
                    </Link>
                    </p>
                </div>
            </div>  
        </div>
    </div>
  );
}