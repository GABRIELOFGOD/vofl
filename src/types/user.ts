import { SurahTypes } from "@/app/dashboard/surah/columns";

export enum ApplicationStatus {
  PENDING = "pending",
  APPROVED = "approved",
  DENIED = "denied",
}

export enum ApplicantCategory {

}

export interface ApplicantDataType {
  id: number;
  fname: string;
  lname: string;
  email: string;
  dob: string;
  state: string;
  category: "8-12" | "13-18" | "18-25";
  lga: string;
  instagram?: string;
  tiktok?: string;
  madrasah: string;
  address: string;
  surah: SurahTypes;
  createdAt: string;
  updatedAt?: string;
  appVideo: string;
  status: ApplicationStatus;
  birthCert: string;
  passport: string;
  hafizCert: string;
}

export enum UserRole {
  USER="user",
  ADMIN="admin",
  DEVELOPER="developer"
}

export interface User {
  fname: string;
  lname: string;
  email: string;
  password: string;
  photo: string;
  id: number;
  role: UserRole;
}