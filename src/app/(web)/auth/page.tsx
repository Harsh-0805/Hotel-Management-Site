"use client";

import { FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const inputStyles =
    "border border-gray-300 sm:text-sm text-balck rounded-lg block w-full p-2.5 focus:outline-none";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(formData);
    } catch (err) {
      console.log(err);
    } finally {
      setFormData(defaultFormData);
    }
  };
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>
        <form
          action=""
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="name@company.com"
            required
            className={inputStyles}
            onChange={handleInputChange}
          />
          <input
            type="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            required
            className={inputStyles}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            required
            minLength={6}
            className={inputStyles}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
        </form>
        <button className="text-blue-700 underline">login</button>
      </div>
    </section>
  );
};

export default Auth;
