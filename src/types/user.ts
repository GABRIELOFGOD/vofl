import { SurahTypes } from "@/app/dashboard/surah/columns";

export enum ApplicationStatus {
  PENDING = "pending",
  APPROVED = "approved",
  DENIED = "denied",
}

export interface ApplicantDataType {
  id: number;
  fname: string;
  lname: string;
  email: string;
  dob: string;
  state: string;
  lga: string;
  instagram?: string;
  tiktok?: string;
  madrasah: string;
  address: string;
  surah: SurahTypes;
  createdAt: string;
  updatedAt?: string;
  hasUploadedVideo: boolean;
  status: ApplicationStatus;
}