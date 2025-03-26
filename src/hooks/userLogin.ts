import { BASEURL } from "@/lib/utils"
import axios from "axios";

export const userLogin = () => {
  const loginUser = async (email: string, password: string) => {
    try {
      const request = await axios.post(`${BASEURL}/users/login`, { email, password });
      return request.data;
    } catch (error) {
      throw error
    }
  }

  return {loginUser};
}

export default userLogin;