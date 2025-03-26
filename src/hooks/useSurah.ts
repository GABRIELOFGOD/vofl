import { Surah } from "@/app/dashboard/surah/columns"
import { BASEURL } from "@/lib/utils"
import { getToken } from "@/utils/getToken"
import axios from "axios"

const useSurah = () => {
  const postSurah = async (surah: Surah) => {
    const token = getToken();
    console.log("Token", token);
    try {
      const request = await axios.post(`${BASEURL}/surah`, surah, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
      });
      return request.data;
    } catch (error) {
      throw error
    }
  }

  const getSurah = async () => {
    try {
      const request = await axios.get(`${BASEURL}/surah`);
      return request.data;
    } catch (error) {
      throw error
    }
  }

  return { postSurah, getSurah }
}

export default useSurah
