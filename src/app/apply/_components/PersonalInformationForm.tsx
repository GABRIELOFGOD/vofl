import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import StateLocalGovt from "./StateLocalGovt"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const PersonalInformationForm = () => {
  return (
    <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md">
      <p className="text-2xl font-bold text-secondary my-auto">Person Information <span className="text-red-500 my-auto">*</span></p>
      <p className="text-xs text-gray-500 font-medium">Please note that all field are required, save your information before proceeding to the next phase.</p>
      <div className="flex gap-5 flex-col">
        <div className="flex flex-col gap-5 mt-5">
          <p className="text-lg font-semibold">Choose Your Age Category</p>
          <RadioGroup defaultValue="option-one" className="flex gap-5">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">8-12 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">13-18 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">18-25 years</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="fname">First Name</Label>
            <Input type="text" id="fname" placeholder="e.g Muhammad" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="lname">Last Name</Label>
            <Input type="text" id="lname" placeholder="e.g Ali" />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="e.g example@youremail.com" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input type="date" id="dob" placeholder="e.g example@youremail.com" />
          </div>
        </div>
        <StateLocalGovt />
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="instagram">Instagram</Label>
            <Input type="text" id="instagram" placeholder="e.g pett.putty" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="tiktok">TikTok</Label>
            <Input type="text" id="tiktok" placeholder="e.g petty_putty" />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="madrasah">Madrasah Attended</Label>
            <Textarea id="madrasah" placeholder="e.g Ansaru-deen" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="address">Home Address</Label>
            <Textarea id="address" placeholder="e.g Tanke, Oke-odo" />
          </div>
        </div>
        <div className="w-full justify-end flex gap-5 mt-5">
          <Button variant="ghost" className="font-semibold cursor-pointer">Clear form</Button>
          <Button variant="primary" className="cursor-pointer font-semibold">Save and continue</Button>
        </div>
      </div>
    </div>
  )
}
export default PersonalInformationForm