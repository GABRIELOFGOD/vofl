import { BASEURL } from "@/lib/utils";
import { ApplicationStart } from "@/types/application";
import { ApplicantDataType } from "@/types/user";
import axios from "axios";

const useApplication = () => {

  const startApplication = async (info: ApplicationStart) => {
    try {
      const response = axios.post(`${BASEURL}/application`, info);
      return (await response).data;
    } catch (error) {
      throw error;
    }
  }

  const continueApplication = async () => {
    const applicationId = localStorage.getItem("applicationId");
    try {
      const response = await axios.get(`${BASEURL}/application/application/${applicationId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async function getData(): Promise<ApplicantDataType[] | undefined> {
    let token = "";
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("token");
      if (localData) {
        token = localData;
      } else {
        return;
      }
    }
    try {
      const response = await axios.get(`${BASEURL}/application/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.applications as ApplicantDataType[];
      console.log("Data fetched successfully:", response.data);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  }

  return { startApplication, continueApplication, getData };
  
}

export default useApplication;