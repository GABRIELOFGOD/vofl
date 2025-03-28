"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import StateLocalGovt from "./StateLocalGovt"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FormEvent, useState } from "react"
import { ApplicationStart } from "@/types/application";
import useApplication from "@/hooks/useApplication";
import { toast } from "sonner";
import Spinner from "react-spinkit";

const PersonalInformationForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [checkApplication, setCheckApplication] = useState<boolean>(false);
  // const [checkApplicationLoading, setCheckApplicationLoading] = useState<boolean>(false);
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
    ageGroup: "8-12"
  });

  const { startApplication } = useApplication();

  const isDataMissing = () => {
    if (
      !basicData.address ||
      !basicData.dob ||
      !basicData.email ||
      !basicData.fname ||
      !basicData.lname ||
      !basicData.lga ||
      !basicData.madrasah ||
      !basicData.state
    ) {
      return true;
    }
    return false;
  }; 
  
  // const isContinue = async () => {
  //   setCheckApplicationLoading(true);
  //   try {
  //     const response = await continueApplication();
  //     console.log(response);
  //     if (response.application) setBasicData(response.application);
  //   } catch (error: any) {
  //     if (error.response.data.message) {
  //       toast.error(error.response.data.message);
  //     } else {
  //       console.log(error);
  //       toast.error("Something went wrong while trying to upload surah");
  //     }
  //   } finally {
  //     setCheckApplicationLoading(false);
  //   }
  // }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDataMissing()) return toast.error("Please fill in all required data");
    setIsLoading(true);
    try {
      const response = await startApplication(basicData);
      localStorage.setItem("applicationId", response.applicationId);
      toast.success(response.message);
    } catch (error: any) {
      console.log("LOGIN ERROR", error);
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md">
      <p className="text-2xl font-bold text-secondary my-auto">Person Information <span className="text-red-500 my-auto">*</span></p>
      <p className="text-xs text-gray-500 font-medium">Please note that all field are required, save your information before proceeding to the next phase.</p>
      <form onSubmit={submit} className="flex gap-5 flex-col">
        <div className="flex flex-col gap-5 mt-5">
          <p className="text-lg font-semibold">Choose Your Age Category</p>
          <RadioGroup
            defaultValue="8-12"
            className="flex gap-5"
            onValueChange={(value) => setBasicData((prev) => ({...prev, ageGroup: value as ApplicationStart["ageGroup"]}))}
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
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="fname">First Name</Label>
            <Input type="text" id="fname" placeholder="e.g Muhammad" onChange={e => setBasicData({ ...basicData, fname: e.target.value })} />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="lname">Last Name</Label>
            <Input type="text" id="lname" placeholder="e.g Ali" onChange={e => setBasicData({ ...basicData, lname: e.target.value })} />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="e.g example@youremail.com" onChange={e => setBasicData({ ...basicData, email: e.target.value })} />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input type="date" id="dob" placeholder="e.g example@youremail.com" onChange={e => setBasicData({ ...basicData, dob: e.target.value })} />
          </div>
        </div>
        <StateLocalGovt
          data={basicData}
          setData={setBasicData}
        />
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="instagram">Instagram</Label>
            <Input type="text" id="instagram" placeholder="e.g pett.putty" onChange={e => setBasicData({ ...basicData, instagram: e.target.value })} />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="tiktok">TikTok</Label>
            <Input type="text" id="tiktok" placeholder="e.g petty_putty" onChange={e => setBasicData({ ...basicData, tiktok: e.target.value })} />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="madrasah">Madrasah Attended</Label>
            <Textarea id="madrasah" placeholder="e.g Ansaru-deen" onChange={e => setBasicData({ ...basicData, madrasah: e.target.value })} />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="address">Home Address</Label>
            <Textarea id="address" placeholder="e.g Tanke, Oke-odo" onChange={e => setBasicData({ ...basicData, address: e.target.value })} />
          </div>
        </div>
        <div className="w-full justify-end flex gap-5 mt-5">
          <Button type="reset" variant="ghost" className="font-semibold cursor-pointer">Clear form</Button>
          <Button disabled={isLoading} type="submit" variant="primary" className="cursor-pointer font-semibold">
            {isLoading ? (
              <div className="flex gap-3">
                <Spinner color="white" name="circle" />
                Saving ...
              </div>
            ) : "Save and continue"}
          </Button>
        </div>
      </form>

      {/* {checkApplicationLoading && <div className="bg-white/90 fixed top-0 left-0 w-full h-full flex justify-center items-center gap-3 font-bold text-sm">
        <Spinner color="black" name="circle" />
        Loading prevoius data
      </div>} */}
    </div>
  )
}
export default PersonalInformationForm