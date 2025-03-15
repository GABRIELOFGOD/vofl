"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Edit } from "lucide-react";

interface SettingsCardProps {
  topic: string;
  description?: string;
  disabled?: boolean;
  onClick?: () => void;
  toggle?: {
    toggleFunction?: () => void;
    value: boolean;
  };
  edit?: {
    callback: () => void;
  }
}

const SettingsCard = ({
  topic,
  description,
  onClick,
  toggle,
  disabled,
  edit
}: SettingsCardProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-lg shadow-md border-secondary-foreground/30 border py-4 px-4 flex justify-between gap-5 md:px-6",
        onClick && disabled ? "cursor-not-allowed" : ""
      )}
      onClick={onClick}
    >
      <div className="flex flex-col gap-3">
        <p className="text-primary font-semibold text-lg">
          {topic}
        </p>
        {description && <p className="text-gray-500 text-sm font-light">
          {description}
        </p>}
      </div>
      {toggle && <div className="my-auto">
        <Switch
          checked={toggle.value}
          onClick={toggle.toggleFunction}
          disabled={disabled}
          className="cursor-pointer"
        />
      </div>}
      {edit && (<Button
        variant="ghost"
        className="flex gap-2 my-auto cursor-pointer"
        disabled={disabled}
      >
        <Edit size={20} className="my-auto text-primary-foreground" />
        <p className="flex my-auto text-primary-foreground font-semibold text-sm">Edit</p>
      </Button>)}
    </div>
  )
}
export default SettingsCard