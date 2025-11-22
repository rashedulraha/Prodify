import React from "react";

const LoginForm = () => {
  return (
    <form className="space-y-3">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="mt-1 block rounded-sm border border-blue-600 focus:outline-2 outline-blue-800 outline-offset-1 w-full py-1 px-3  text-sm "
        />
      </div>
      <div>
        <label htmlFor="email">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your valid password"
          required
          className="mt-1 block rounded-sm border border-blue-600 focus:outline-2 outline-blue-800 outline-offset-1 w-full py-1 px-3  text-sm "
        />
      </div>

      <button
        type="submit"
        className="w-full text-base cursor-pointer font-semibold flex items-center justify-center bg-blue-600 hover:bg-blue-800 rounded-sm p-1 transition-all text-white">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
