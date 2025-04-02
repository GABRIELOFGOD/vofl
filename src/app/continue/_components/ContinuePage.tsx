"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ApplicantDataType } from "@/types/user";
import { Label } from "@radix-ui/react-label"
import { Video } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useApplication from "@/hooks/useApplication";
import Spinner from "react-spinkit";
import DocumentUpload from "@/app/apply/_components/DocumentUpload";

const ContinuePage = () => {
  const [applicationId, setApplicationId] = useState<string>("");
  const [applicant, setApplicant] = useState<ApplicantDataType | null>(null);
  const [checkApplicationLoading, setCheckApplicationLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const router = useRouter();
  
  const values = useSearchParams();
  // const query = values.get("applicationId");

  const { continueApplication } = useApplication();

  const isContinue = async () => {
    setCheckApplicationLoading(true);
    try {
      const response = await continueApplication();
      if (response.application) setApplicant(response.application as ApplicantDataType);
      console.log(response.application);
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

  useEffect(() => {
    const query = values.get("applicationId");
    if (query !== null) {
      setSearchQuery(query);
      setApplicationId(query);
      isContinue();
    } else {
      if (typeof window !== "undefined") {
        const localData = localStorage.getItem("applicationId");
        if (localData) setApplicationId(localData);
      }
    }
  }, [values]);

  const getApplication = () => {
    router.push(`/continue?applicationId=${applicationId}`);
    if (searchQuery !== null) return;
  }
  
  return (
    <div className="w-full justify-center items-center flex flex-col gap-10 py-10 px-3">
      <div className="w-full justify-center items-center flex flex-col gap-10 md:w-[750px]">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-start text-primary font-bold text-4xl">Complete Application</p>
          <p className="text-secondary-foreground">Upload your video not longer than 1:30 minutes</p>
        </div>
        <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md flex flex-col gap-5">
          <div>
            <p className="font-semibold text-lg">Application ID</p>
            <p className="text-xs font-medium text-gray-400">Enter the Application ID generated for you during your application</p>
          </div>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Enter Application ID"
              value={applicationId}
              onChange={(e) => setApplicationId(e.target.value)}
            />
            <Button onClick={getApplication} variant="primary" className="font-semibold">Continue</Button>
          </div>
        </div>
        {applicant &&
        <DocumentUpload
          passport={applicant.passport}
          birth={applicant.birthCert}
          hafiz={applicant.hafizCert}
        />}
        {applicant && applicant.hafizCert && applicant.birthCert && applicant.passport && <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md flex flex-col gap-5">
          <div>
            <p className="font-semibold text-lg">Upload video</p>
            <p className="text-xs font-medium text-gray-400">Upload the video of your Surah recitation</p>
          </div>
          <input type="file" id="hafizcert" className="hidden" accept="video/*" />
          <Label htmlFor="hafizcert" className="aspect-video w-full border-dashed flex items-center justify-center cursor-pointer border-2 border-gray-500 rounded-md animate-pulse text-gray-400 mx-auto flex-col">
            <Video size={50} />
            <p className="text-center font-semibold">Surah Video</p>
          </Label>
          <div className="w-full justify-end flex gap-5 mt-5">
            <Button variant="primary" className="cursor-pointer font-semibold">Complete Application</Button>
          </div>
        </div>}
      </div>
      {checkApplicationLoading && <div className="bg-white/90 fixed top-0 left-0 w-full h-full flex justify-center items-center gap-3 font-bold text-sm">
        <Spinner color="black" name="circle" />
        Wait while we fetch your data ...
      </div>}
    </div>
  )
}
export default ContinuePage;