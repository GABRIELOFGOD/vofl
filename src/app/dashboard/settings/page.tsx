"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import SettingsCard from "./_components/SettingsCard"
import useSettings from "@/hooks/useSettings";
import { useState } from "react";
import CalendarModel from "./_components/CalendarModel";

const Settings = () => {
  const [showDate, setShowCalendar] = useState<boolean>(false);
  const { settings } = useGlobalContext();
  const { toggleSetting } = useSettings();
  
  return (
    <div className="h-full py-10">
      <div className="mx-auto flex flex-col gap-10 w-full md:w-[750px]">
        <div className="flex justify-between">
          <p className="font-bold text-2xl text-primary">Settings</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Application Settings</p>
            <p className="text-sm text-gray-400">Settings here are applicable to condidate applications</p>
          </div>
          <SettingsCard
            topic="Application"
            description="Swtching this off will close application for users"
            toggle={{
              value: settings.applicationOpen,
              toggleFunction: () => toggleSetting("applicationOpen")
            }}
          />
          <SettingsCard
            topic="Application Video"
            description="Switching this off will discontiue uploading of surah recitation video for applicants"
            toggle={{
              value: settings.allowVideoUpload,
              toggleFunction: () => toggleSetting("allowVideoUpload")
            }}
          />
          <SettingsCard
            topic="Next Cohort"
            description="Set a calendar date for next cohort"
            edit={{
              callback: () => setShowCalendar(true),
            }}
          />
        </div>

        <div className="flex flex-col gap-5 mb-20">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Admin Settings</p>
            <p className="text-sm text-gray-400">Administrative permission settings</p>
          </div>
          <SettingsCard
            topic="Admin Registration"
            description="Allow new admin registration"
            toggle={{
              value: settings.allowAdminRegistration,
              toggleFunction: () => toggleSetting("allowAdminRegistration")
            }}
          />
          <SettingsCard
            topic="Allow cohort start"
            description="Switch this on to allow new cohort setup, (Please remember to switch it off immediately after cohort setup)"
            toggle={{
              value: false,
              toggleFunction: () => {}
            }}
          />
        </div>
      </div>
      {showDate && (
        <CalendarModel
          date={settings.applicationStartDate}
          setDate={(date) => {
            // setDate(date);
            setShowCalendar(false);
          }}
        />
      )}
    </div>
  )
}
export default Settings