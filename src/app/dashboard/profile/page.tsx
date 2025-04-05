"use client";

import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/GlobalContext";
import { Edit, Mail, User, User2 } from "lucide-react";
import Image from "next/image";
import EditCard from "./_components/EditCard";
import { Input } from "@/components/ui/input";
import { generatePassword } from "@/utils/password";
import { useState } from "react";
import ObscureInput from "@/components/ui/obscureInput";

const Profile = () => {
  const { user } = useGlobalContext();
  const [password, setPassword] = useState<string>("");

  const generatedPassword = () => {
    const password = generatePassword(12);
    setPassword(password);
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <section className="flex flex-col gap-5">
        <div className="flex gap-10">
          <div className="h-32 w-32 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
            {user && user.photo !== null && user?.photo !== "" ?
              <Image
                src={user.photo}
                alt="User photo"
                className="h-full w-full object-cover rounded-full"
                fill
              />  :
              <User size={50} />
            }
          </div>
          <Button
            variant="ghost"
            className="flex gap-3 border border-gray-500 cursor-pointer font-semibold my-auto"
          >
            <Edit size={20} className="text-primary" />
            Edit photo
          </Button>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <EditCard
            icon={User2}
            name="First Name"
            value={user?.fname ?? ""}
          />
          <EditCard
            icon={User2}
            name="Last Name"
            value={user?.lname ?? ""}
          />
          <EditCard
            icon={Mail}
            name="Email"
            value={user?.email ?? ""}
            showEdit={false}
          />
        </div>

        <div>
          <p className="text-xl font-semibold text-secondary mt-5">Pasword Section</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5 mt-5"
          >
            <ObscureInput
              value=""
              onChange={() => {}}
              placeholder="Current Password"
              className="w-full"
            />
            <ObscureInput
              value=""
              onChange={() => {}}
              placeholder="New Password"
              className="w-full"
            />
            <ObscureInput
              value=""
              onChange={() => {}}
              placeholder="Confirm Password"
              className="w-full"
            />
            <Button
              variant="primary"
              className="font-semibold w-fit"
              type="submit"
            >
              Save Password
            </Button>
          </form>
        </div>
      </section>
      <section className="mt-20 flex flex-col gap-5 md:px-10">
        <div>
          <p className="font-bold text-2xl">Create New Admin Account</p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5 mt-5"
        >
          <Input
            type="text"
            placeholder="First Name"
            className="w-full"
          />
          <Input
            type="text"
            placeholder="Last Name"
            className="w-full"
          />
          <Input
            type="email"
            placeholder="Email"
            className="w-full"
          />
          <div className="flex gap-3">
            <ObscureInput
              placeholder="Password"
              className="w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="ghost"
              className="flex gap-3 border border-gray-500 cursor-pointer font-semibold my-auto"
              type="button"
              onClick={generatedPassword}
            >
              Generate Password
            </Button>
          </div>
          <Button
            variant="primary"
            className="font-semibold w-fit"
            type="submit"
          >
            Create Account
          </Button>
        </form>
      </section>
    </div>
  )
}
export default Profile