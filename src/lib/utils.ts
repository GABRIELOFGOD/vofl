import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export const BASEURL = "http://localhost:5000/api/v1";
export const BASEURL = "https://versesoflight.org/api/api/v1";