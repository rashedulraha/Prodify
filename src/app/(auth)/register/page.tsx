import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div>
      <div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md ">
        <LoginForm />

        <div className="flex items-center justify-center mt-5 text-sm gap-5">
          <p>Don&apos;t Have an account ? </p>
          <Link className="text-blue-500" href={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
