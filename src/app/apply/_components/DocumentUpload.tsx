"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BASEURL } from "@/lib/utils";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { toast } from "sonner";
import { Image as ImageIcon } from "lucide-react";

interface UploadState {
  file: File | null;
  preview: string;
  uploading: boolean;
  nameT: string;
}

export interface UploadDocumentProps {
  passport?: string;
  hafiz?: string;
  birth?: string;
}

const DocumentUpload = ({ passport, hafiz, birth }: UploadDocumentProps) => {
  const [uploads, setUploads] = useState<Record<string, UploadState>>({
    passport: {
      file: null,
      preview: passport || "",
      uploading: false,
      nameT: "Personal passport",
    },
    birthcert: {
      file: null,
      preview: birth || "",
      uploading: false,
      nameT: "Birth certificate",
    },
    hafizcert: {
      file: null,
      preview: hafiz || "",
      uploading: false,
      nameT: "Hafiz certificate",
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploads((prev) => ({
          ...prev,
          [field]: {
            file,
            preview: reader.result as string,
            uploading: false,
            nameT: uploads[field].nameT,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (field: string) => {
    setUploads((prev) => ({
      ...prev,
      [field]: { file: null, preview: "", uploading: false, nameT: uploads[field].nameT },
    }));
  };

  const handleUpload = async (field: string) => {
    if (!uploads[field]?.file) return;

    setUploads((prev) => ({
      ...prev,
      [field]: { ...prev[field], uploading: true },
    }));

    const formData = new FormData();
    formData.append("avatar", uploads[field].file as Blob);

    const endPoint =
      field === "passport" ? "profile-photo" : field === "hafizcert" ? "harfiz" : "birth";

    const api: string = `${BASEURL}/application/${endPoint}`;
    const applicationId = localStorage.getItem("applicationId");
    if (!applicationId)
      return toast.error(
        "Please continue your registration with the device or the browser you were using before"
      );
    try {
      const request = await fetch(api, {
        method: "PATCH",
        headers: {
          applicationId: applicationId,
        },
        body: formData,
      });

      const response = await request.json();
      if (!request.ok) throw new Error(response.message || "Upload failed");

      if (response.message) {
        toast.success(response.message);
      }
    } catch (error) {
      console.error("ERROR UPLOADING", error);
      toast.error(`Error uploading ${field}`);
    } finally {
      setUploads((prev) => ({
        ...prev,
        [field]: { ...prev[field], uploading: false },
      }));
    }
  };

  return (
    <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md">
      <p className="text-2xl font-bold text-secondary my-auto">
        Document Uploads <span className="text-red-500">*</span>
      </p>
      <p className="text-xs text-gray-500 font-medium">
        Make sure you upload the right documents as all information will be manually reviewed.
      </p>

      <div className="flex flex-col gap-5 w-full mt-5">
        {Object.keys(uploads).map((field) => (
          <div key={field} className="flex flex-col gap-3">
            <p className="font-semibold text-lg capitalize">{uploads[field].nameT}</p>
            <input
              type="file"
              id={field}
              className="hidden"
              accept="image/*"
              onChange={(e) => handleFileChange(e, field)}
            />
            <Label
              htmlFor={field}
              className="h-[200px] w-full relative border-dashed flex items-center justify-center cursor-pointer border-2 border-gray-500 rounded-md text-gray-400 mx-auto flex-col"
            >
              {uploads[field].preview ? (
                <Image
                  src={uploads[field].preview}
                  alt={field}
                  className="h-full w-full object-cover rounded-md"
                  fill
                />
              ) : (
                <>
                  <ImageIcon size={50} />
                  <p className="text-center font-semibold">Upload {field.replace(/([A-Z])/g, " $1")}</p>
                </>
              )}
            </Label>
            <div className="w-full justify-end flex gap-5 mt-5">
              <Button
                type="reset"
                variant="ghost"
                className="font-semibold cursor-pointer"
                onClick={() => handleRemove(field)}
                disabled={!uploads[field].file}
              >
                Remove
              </Button>
              <Button
                variant="primary"
                className="cursor-pointer font-semibold"
                onClick={() => handleUpload(field)}
                disabled={!uploads[field].file || uploads[field].uploading}
              >
                {uploads[field].uploading ? "Uploading..." : "Save Image"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentUpload;
