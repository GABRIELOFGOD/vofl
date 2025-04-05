"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { BASEURL } from "@/lib/utils";
import { SettingsType } from "@/types/settings";
import { getToken } from "@/utils/getToken";
import axios from "axios";
import { useRouter } from "next/navigation";

const useSettings = () => {
  const router = useRouter();
  const { settings, setSettings } = useGlobalContext();
  const token = getToken();
  
  const updateSettings = async (newSettings: SettingsType) => {
    try {
      const response = await axios.patch(`${BASEURL}/general`, newSettings, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setSettings(response.data.settings);
    } catch (error) {
      console.error("Error updating settings:", error);
    }
  };

  const toggleSetting = async (settingKey: keyof SettingsType) => {
    
    setSettings({ ...settings, [settingKey]: !settings[settingKey] });
    const newSettings = { ...settings, [settingKey]: !settings[settingKey] };
    await updateSettings(newSettings);
    router.refresh();
  };

  return {
    toggleSetting,
  }
  
}

export default useSettings;