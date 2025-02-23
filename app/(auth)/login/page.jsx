"use client";

import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { Button, User } from "@heroui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
    const {user} = useAuth();
    const router = useRouter();
    useEffect(()=>{
        if(user){
            router.push("/");
        }
    },[user]);
  return (
    <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <img className="h-12" src="/logo.png" alt="" />
        </div>
        <div className="flex flex-col gap-5 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
          <h1 className="font-bold text-xl">Login With Emain</h1>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              name="user-email"
              id="user-email"
              placeholder="Enter your email here..."
              className="px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <input
              type="password"
              name="user-password"
              id="user-password"
              placeholder="enter password"
              className="px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <Button color="primary">Login</Button>
          </form>
          <hr />
          <div className="flex justify-between">
            <Link href={"/sign-up"}>
              <button className=" text-sm font-semibold text-blue-700">
                New? Create Account
              </button>
            </Link>

            <Link href={"/forget-password"}>
              <button className=" text-sm font-semibold text-blue-700">
                Forget Password?
              </button>
            </Link>
          </div>
          <SignInWithGoogleComponent />
        </div>
      </section>
    </main>
  );
}

function SignInWithGoogleComponent() {
    const [isLoading,setIsLoading]=useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      toast.error(error?.message);
    }
    setIsLoading(false);
  };
  return <Button isLoading={isLoading} isDisabled={isLoading} onClick={handleLogin}>Sign in With Google</Button>;
}
