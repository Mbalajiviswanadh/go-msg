import Image from "next/image";

import logo from "../../public/images/logo.png";
import AuthForm from "./components/AuthForm";
export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-mid">
        {/* logo */}
        <div className="flex items-center justify-center">
          <Image alt="logo" height="50" width="50" src={logo} />
          <h1 className=" text-center text-4xl font-bold tracking-tight text-gray-700">
            <span className="text-sky-400">Go-</span>Msg.
          </h1>
        </div>

        <h1 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-600">
          Sign in to your account
        </h1>
      </div>
      {/* AUth Part */}
      <AuthForm />
    </div>
  );
}
