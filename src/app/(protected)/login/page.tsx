"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import userLogin from "@/hooks/userLogin";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import Spinner from "react-spinkit";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";

export interface LoginDataProps {
  email: string;
  password: string;
}

const Login = () => {
  const [loginData, setLoginData] = useState<LoginDataProps>({
    email: "",
    password: ""
  });

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const { loginUser } = userLogin();

  const { isLoggedIn, setIsLoggedIn, loading: globalLoading } = useGlobalContext();

  useEffect(() => {
    if (!globalLoading && isLoggedIn) {
      router.replace("/dashboard");
    }
  }, [isLoggedIn, globalLoading]);
  
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginUser(loginData.email, loginData.password);
      localStorage.setItem("token", response.token);
      setIsLoggedIn(true);
      if (response.message) toast.success(response.message);
    } catch (error: any) {
      console.log("LOGIN ERROR", error);
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="flex justify-center items-center w-full h-screen p-3">
      <div className="shadow-sm bg-white rounded-lg p-4 md:p-8 flex flex-col gap-5 w-full md:w-[500px]">
        <div className="flex flex-col gap-">
          <p className="text-2xl text-primary font-bold">Login</p>
          <p className="flex text-secondary font-medium text-sm">This page is dedicated to administrative login</p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              type="email"
              value={loginData.email}
              placeholder="e.g. muhammad.umar@google.com"
              disabled={loading}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="password">Password:</Label>
            <Input
              id="password"
              type="password"
              value={loginData.password}
              placeholder="************"
              disabled={loading}
              onChange={(e) => setLoginData({ ...loginData, password:e.target.value })}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className="disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex gap-2 justify-center text-sm">
                <Spinner name="circle" color="white" />
                Loading
              </div>
            ) : "Login"}
          </Button>
        </form>
      </div>
    </div>
  )
}
export default Login;