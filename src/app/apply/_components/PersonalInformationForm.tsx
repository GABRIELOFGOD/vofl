import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const PersonalInformationForm = () => {
  return (
    <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md">
      <p className="text-2xl font-bold text-secondary">Person Information</p>
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
      </div>
    </div>
  )
}
export default PersonalInformationForm