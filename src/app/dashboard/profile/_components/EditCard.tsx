"use client"

import { Button } from "@/components/ui/button";
import { Edit, LucideIcon } from "lucide-react";

export interface EditCardProps {
  icon: LucideIcon;
  name: string;
  value: string;
  showEdit?: boolean;
}

const EditCard = ({
  icon: Icon,
  name, value, showEdit = true
}: EditCardProps) => {
  return (
    <div className="w-full rounded-md border-2 border-gray-500/50 shadow-md p-5 flex flex-col gap-5">
      <div className="flex justify-between gap-3">
        <div className="flex gap-3">
          <div className="h-fit w-fit p-2 bg-primary-foreground/20 rounded-full">
            <Icon size={22} className="text-primary-foreground" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-primary-foreground font-bold text-xl">{name}</p>
            <p className="text-xs text-gray-500">{showEdit ? `Click on edit to update your ${name}` : `${name} is not editable`}</p>
          </div>
        </div>
        {showEdit && <Button
          variant="ghost"
          className="flex gap-3 border border-gray-500 cursor-pointer font-semibold"
        >
          <Edit size={20} className="text-primary" />
          Edit
        </Button>}
      </div>
      <p className="font-semibold">{value}</p>
    </div>
  )
}
export default EditCard