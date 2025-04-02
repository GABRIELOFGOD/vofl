
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import StateLocalGovt from "./StateLocalGovt";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import { ApplicationStart } from "@/types/application";
import useApplication from "@/hooks/useApplication";
import { toast } from "sonner";
import Spinner from "react-spinkit";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PersonalInformationForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [checkApplicationLoading, setCheckApplicationLoading] = useState<boolean>(false);
  const [foundData, setFoundData] = useState<boolean>(false);
  const [localData, setLocalData] = useState<string | null>(null);

  const router = useRouter();

  const [basicData, setBasicData] = useState<ApplicationStart>({
    address: "",
    dob: "",
    email: "",
    fname: "",
    lname: "",
    lga: "",
    madrasah: "",
    state: "",
    instagram: "",
    tiktok: "",
    ageGroup: "8-12",
  });

  const { startApplication, continueApplication } = useApplication();

  const validateFields = () => {
    const newErrors: Record<string, boolean> = {};
    let isValid = true;

    Object.entries(basicData).forEach(([key, value]) => {
      if (!value && key !== "instagram" && key !== "tiktok") {
        newErrors[key] = true;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await startApplication(basicData);
      localStorage.setItem("applicationId", response.applicationId);
      toast.success(response.message);
      router.push(`/continue?applicationId=${response.applicationId}`)
    } catch (error: any) {
      console.error("LOGIN ERROR", error);
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const isContinue = async () => {
    setCheckApplicationLoading(true);
    try {
      const response = await continueApplication();
      if (response.application) setFoundData(true);
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
        toast.error("Something went wrong while trying to upload surah");
      }
    } finally {
      setCheckApplicationLoading(false);
    }
  }

  // const localData = localStorage.getItem("applicationId");
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("applicationId");
      setLocalData(storedData);
      
      if (storedData) {
        isContinue();
      }
    }
  }, []);

  return (
    <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md">
      <p className="text-2xl font-bold text-secondary my-auto">
        Personal Information <span className="text-red-500 my-auto">*</span>
      </p>
      <p className="text-xs text-gray-500 font-medium">
        Please note that all fields are required. Save your information before proceeding to the next phase.
      </p>
      <form onSubmit={submit} className="flex gap-5 flex-col">
        <div className="flex flex-col gap-5 mt-5">
          <p className="text-lg font-semibold">Choose Your Age Category</p>
          <RadioGroup
            defaultValue="8-12"
            className="flex gap-5"
            onValueChange={(value) => setBasicData((prev) => ({ ...prev, ageGroup: value as ApplicationStart["ageGroup"] }))}
          >
            {["8-12", "13-18", "19-25"].map((ageRange) => (
              <div key={ageRange} className="flex items-center space-x-2">
                <RadioGroupItem value={ageRange} id={`option-${ageRange}`} />
                <Label htmlFor={`option-${ageRange}`}>{ageRange} years</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          {[
            { id: "fname", label: "First Name", placeholder: "e.g Muhammad" },
            { id: "lname", label: "Last Name", placeholder: "e.g Ali" },
          ].map(({ id, label, placeholder }) => (
            <div key={id} className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor={id}>{label}</Label>
              <Input
                type="text"
                id={id}
                placeholder={placeholder}
                className={errors[id] ? "border-red-500" : ""}
                onChange={(e) => setBasicData({ ...basicData, [id]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          {[
            { id: "email", label: "Email", type: "email", placeholder: "e.g example@youremail.com" },
            { id: "dob", label: "Date of Birth", type: "date", placeholder: "" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor={id}>{label}</Label>
              <Input
                type={type}
                id={id}
                placeholder={placeholder}
                className={errors[id] ? "border-red-500" : ""}
                onChange={(e) => setBasicData({ ...basicData, [id]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <StateLocalGovt data={basicData} setData={setBasicData} />

        <div className="flex flex-col gap-5 w-full">
          {[
            { id: "madrasah", label: "Madrasah Attended", placeholder: "e.g Ansaru-deen" },
            { id: "address", label: "Home Address", placeholder: "e.g Tanke, Oke-odo" },
          ].map(({ id, label, placeholder }) => (
            <div key={id} className="grid w-full items-center gap-1.5">
              <Label htmlFor={id}>{label}</Label>
              <Textarea
                id={id}
                placeholder={placeholder}
                className={errors[id] ? "border-red-500" : ""}
                onChange={(e) => setBasicData({ ...basicData, [id]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <div className="w-full justify-end flex gap-5 mt-5">
          <Button type="reset" variant="ghost" className="font-semibold cursor-pointer">
            Clear form
          </Button>
          <Button disabled={isLoading} type="submit" variant="primary" className="cursor-pointer font-semibold">
            {isLoading ? (
              <div className="flex gap-3">
                <Spinner color="white" name="circle" />
                Saving ...
              </div>
            ) : (
              "Save and continue"
            )}
          </Button>
        </div>
        <p>Are you done with this phase? <Link className="text-primary font-semibold" href={`/continue`}>Continue from here</Link></p>
      </form>
      {checkApplicationLoading && <div className="bg-white/90 fixed top-0 left-0 w-full h-full flex justify-center items-center gap-3 font-bold text-sm">
         <Spinner color="black" name="circle" />
         Loading prevoius data
       </div>}
       {foundData && (
        <div className="w-full h-full bg-black/70 fixed top-0 left-0 flex justify-center items-center p-3">
          <div className="border rounded-md border-gray-800 bg-white p-4 flex flex-col gap-4 w-full md:w-[500px] h-fit shadow-sm text-slate-900">
            <p className="text-2xl font-bold">Data found</p>
            <p>We found that you&apos;ve been registering for the competition before, do you want to continue with the registration?</p>
            <div className="flex gap-3 justify-end">
              <Button
                variant="ghost"
                className="border border-slate-900 cursor-pointer"
                onClick={() => setFoundData(false)}
              >Cancel</Button>
              <Button
                variant="primary"
                onClick={() => router.push(`/continue?applicationId=${localData}`)}
              >Continue</Button>
            </div>
          </div>
        </div>
       )}
    </div>
  );
};

export default PersonalInformationForm;
