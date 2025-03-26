import { BASEURL } from "@/lib/utils";
import { ApplicationStart } from "@/types/application";
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

  return { startApplication, continueApplication }
  
}

export default useApplication;