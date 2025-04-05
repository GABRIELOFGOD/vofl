"use client";

import { BASEURL } from "@/lib/utils";
import { SettingsType } from "@/types/settings";
import { User } from "@/types/user";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export type GlobalContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  loading: boolean;
  settings: SettingsType;
  setSettings: (settings: SettingsType) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [settings, setSettings] = useState<SettingsType>({
    allowAdminRegistration: false,
    allowVideoUpload: false,
    applicationOpen: false,
    applicationStartDate: null
  });

  const getSettings = async () => {
    
    try {
      const response = await axios.get(`${BASEURL}/general`);
      setSettings(response.data.allSettings as SettingsType);
    } catch (error) {
      console.error("Error fetching settings:", error);      
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (token) {
        try {
          // Simulating an API call to verify the token
          const response = await fetch(`${BASEURL}/users/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.ok) {
            const data = await response.json();
            setUser(data.user);
            setIsLoggedIn(true);
            getSettings();
          } else {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error("Token validation failed:", error);
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  return (
    <GlobalContext.Provider value={{ 
      user, setUser,
      isLoggedIn, setIsLoggedIn,
      loading,
      settings, setSettings,

    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
