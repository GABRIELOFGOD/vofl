"use client";

import { useState } from "react"
import { Surah } from "../columns";
import { SidebarCloseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useSurah from "@/hooks/useSurah";
import { toast } from "sonner";
// import { useRouter } from "next/navigation";
import Spinner from "react-spinkit";

const CreateSurah = ({close}:{close: () => void}) => {
  const [surah, setSurah] = useState<Surah>({
    category: "8-12",
    description: "",
    title: ""
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const router = useRouter();

  const { postSurah } = useSurah();

  const submit = async () => {
    setIsLoading(true);
    try {
      const response = await postSurah(surah);
      toast.success(response.message || "Surah posted successfully");
      close();
      // router.refresh();
    } catch (error: any) {
      console.log(error);
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
        toast.error("Something went wrong while trying to upload surah");
      }
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="w-full md:w-[550px] bg-white rounded-md shadow-md p-4 md:p-8">
      <div className="flex justify-between gap-2 w-full">
        <p className="text-start text-primary font-bold text-2xl">Add Surah</p>
        <Button
          variant="ghost"
          onClick={close}
        >
          <SidebarCloseIcon
            size={15}
            className="text-black"
          />
        </Button>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <RadioGroup 
          value={surah.category} 
          onValueChange={(value) => setSurah((prev) => ({ ...prev, category: value as Surah["category"] }))}
          className="flex gap-5 w-full mt-5"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="8-12" id="option-one" />
            <Label htmlFor="option-one">8-12 years</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="13-18" id="option-two" />
            <Label htmlFor="option-two">13-18 years</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="19-25" id="option-three" />
            <Label htmlFor="option-three">19-25 years</Label>
          </div>
        </RadioGroup>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" placeholder="Surat Fa'thia" onChange={(e) => setSurah((prev) => ({ ...prev, title: e.target.value }))} />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="desc">Description</Label>
          <Input type="text" id="desc" placeholder="Bisimilahi ra'amni rohim..." onChange={(e) => setSurah((prev) => ({ ...prev, description: e.target.value }))} />
        </div>
        <Button
          variant="primary"
          onClick={submit}
          disabled={isLoading}
        >
          { isLoading ?
            <div className="flex gap-2 justify-center text-sm">
              <Spinner name="circle" color="white" />
              Loading
            </div> : "Add surah"
          }
        </Button>
      </div>
    </div>
  )
}
export default CreateSurah