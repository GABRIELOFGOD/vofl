"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ApplicantDataType } from "@/types/user";
import { Label } from "@radix-ui/react-label";
import { Video } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useApplication from "@/hooks/useApplication";
import Spinner from "react-spinkit";
import DocumentUpload from "@/app/apply/_components/DocumentUpload";
import { BASEURL } from "@/lib/utils";

const ContinuePage = () => {
  const [applicationId, setApplicationId] = useState<string>("");
  const [applicant, setApplicant] = useState<ApplicantDataType | null>(null);
  const [checkApplicationLoading, setCheckApplicationLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  
  const router = useRouter();
  const values = useSearchParams();
  const { continueApplication } = useApplication();

  const isContinue = async () => {
    setCheckApplicationLoading(true);
    try {
      const response = await continueApplication();
      if (response.application) setApplicant(response.application as ApplicantDataType);
      // console.log(response.application);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong while trying to fetch application data");
    } finally {
      setCheckApplicationLoading(false);
    }
  };

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
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedVideo(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const uploadVideo = async () => {
    if (!selectedVideo) {
      toast.error("Please select a video to upload.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("video", selectedVideo);
    formData.append("applicationId", applicationId);

    try {
      const response = await fetch(`${BASEURL}/application/video`, {
        method: "PATCH",
        headers: {
          applicationId: applicationId,
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload video");

      toast.success("Video uploaded successfully!");
      setSelectedVideo(null);
      setVideoPreview(null);
    } catch (error) {
      toast.error("Error uploading video. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const clearVideo = () => {
    setVideoPreview(null);
    setSelectedVideo(null);
  }

  return (
    <div className="w-full flex flex-col items-center gap-10 pt-24 py-10 px-3">
      <div className="w-full flex flex-col items-center gap-10 md:w-[750px]">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-start text-primary font-bold text-4xl">Complete Application</p>
          <p className="text-secondary-foreground">Upload your application documents</p>
        </div>

        <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md flex flex-col gap-5">
          <div>
            <p className="font-semibold text-lg">Application ID</p>
            <p className="text-xs font-medium text-gray-400">Enter the Application ID generated during your application</p>
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

        {applicant && !applicant.appVideo && (
          <DocumentUpload
            passport={applicant.passport}
            birth={applicant.birthCert}
            hafiz={applicant.hafizCert}
          />
        )}

        {applicant && !applicant.appVideo && applicant.hafizCert && applicant.birthCert && applicant.passport && (
          <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md flex flex-col gap-5">
            <div>
              <p className="font-semibold text-lg">Upload Video</p>
              <p className="text-xs font-medium text-gray-400">Upload the video of your Surah recitation</p>
            </div>

            <input
              type="file"
              id="videoUpload"
              className="hidden"
              accept="video/*"
              onChange={handleVideoChange}
            />

            <Label htmlFor="videoUpload" className="aspect-video w-full border-dashed flex items-center justify-center cursor-pointer border-2 border-gray-500 rounded-md text-gray-400 mx-auto flex-col">
              {videoPreview ? (
                <video src={videoPreview} className="w-full h-full object-cover rounded-md" controls />
              ) : (
                <>
                  <Video size={50} />
                  <p className="text-center font-semibold">Upload Surah Video</p>
                </>
              )}
            </Label>

            <div className="w-full flex justify-end gap-5 mt-5">
              <Button
                variant="ghost"
                className="cursor-pointer"
                disabled={uploading || videoPreview === null}
                onClick={clearVideo}
              >
                Remove
              </Button>
              <Button
                variant="primary"
                className="cursor-pointer font-semibold"
                onClick={uploadVideo}
                disabled={uploading}
              >
                {uploading ? <Spinner name="circle" color="white" /> : "Submit video"}
              </Button>
            </div>
          </div>
        )}
        {applicant && applicant.appVideo && (
          <div  className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md flex flex-col justify-center items-center gap-5">
            <p className="text-secondary font-bold text-2xl">Dear {applicant.fname}</p>
            <p>You are done with your application, please continue posting on social media and don't forget to tag us, if there is further information, you will be contacted via email.</p>
          </div>
        )}
      </div>

      {checkApplicationLoading && (
        <div className="bg-white/90 fixed top-0 left-0 w-full h-full flex justify-center items-center gap-3 font-bold text-sm">
          <Spinner color="black" name="circle" />
          Wait while we fetch your data ...
        </div>
      )}
    </div>
  );
};

export default ContinuePage;
