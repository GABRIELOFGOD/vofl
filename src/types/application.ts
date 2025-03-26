export interface ApplicationStart {
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
  ageGroup: "8-12" | "13-18" | "19-25"
}