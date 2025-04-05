"use client";

import { Eye, EyeOff } from "lucide-react"
import { Input } from "./input"
import { useState } from "react"

const ObscureInput = ({
  placeholder = "Enter Password",
  className = "",
  value,
  onChange,
}: {
  placeholder?: string,
  className?: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <div
      className={`relative flex items-center justify-between w-full h-fit border-2 border-gray-500/50 rounded-md shadow-sm ${className}`}>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
      />
      <div
        className={`absolute right-3 top-0 h-full w-fit cursor-pointer flex items-center justify-center`}
        onClick={() => setShowPassword(!showPassword)}
        onMouseDown={(e) => e.preventDefault()}
      >
        {showPassword ?
          <EyeOff size={20} /> :
          <Eye size={20} />
        }
      </div>
    </div>
  )
}
export default ObscureInput