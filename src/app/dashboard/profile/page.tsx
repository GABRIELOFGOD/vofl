"use client";

import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/GlobalContext";
import { Edit, Mail, User, User2 } from "lucide-react";
import Image from "next/image";
import EditCard from "./_components/EditCard";

const Profile = () => {
  const { user } = useGlobalContext();
  
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
      </section>
      <section>New admin section</section>
    </div>
  )
}
export default Profile