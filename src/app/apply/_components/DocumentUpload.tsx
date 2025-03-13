import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { File } from "lucide-react"

const DocumentUpload = () => {
  return (
    <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md">
      <p className="text-2xl font-bold text-secondary my-auto">Document Uploads <span className="text-red-500 my-auto">*</span></p>
      <p className="text-xs text-gray-500 font-medium">Make sure you upload the right documents as all information will be manually reviewed.</p>
      <div className="flex flex-col gap-5 w-full mt-5">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg">Passport</p>
          <input type="file" id="passport" className="hidden" />
          <Label htmlFor="passport" className="h-[120px] w-[140px] border-dashed flex items-center justify-center cursor-pointer border-2 border-gray-500 rounded-md animate-pulse text-gray-400 mx-auto">
            <p>600x800</p>
          </Label>
          <p className="text-xs text-gray-400 text-center">Passport photograph with 600x800 pixels resolution and not more than 2mb in size</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg">Birth Certificate</p>
          <input type="file" id="birthcert" className="hidden" />
          <Label htmlFor="birthcert" className="h-[200px] w-full border-dashed flex items-center justify-center cursor-pointer border-2 border-gray-500 rounded-md animate-pulse text-gray-400 mx-auto flex-col">
            <File size={50} />
            <p className="text-center font-semibold">Upload Birth Certificate</p>
          </Label>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-lg">Hafiz Completion Certificate</p>
            <p className="text-xs font-medium text-gray-400">Compulsory for applicants of age 18-25, from a recongnized Madrasah</p>
          </div>
          <input type="file" id="birthcert" className="hidden" />
          <Label htmlFor="birthcert" className="h-[200px] w-full border-dashed flex items-center justify-center cursor-pointer border-2 border-gray-500 rounded-md animate-pulse text-gray-400 mx-auto flex-col">
            <File size={50} />
            <p className="text-center font-semibold">Upload Hafiz Certificate</p>
          </Label>
        </div>
        <div className="w-full justify-end flex gap-5 mt-5">
          <Button variant="ghost" className="font-semibold cursor-pointer">Clear form</Button>
          <Button variant="primary" className="cursor-pointer font-semibold">Save and continue</Button>
        </div>
      </div>
    </div>
  )
}
export default DocumentUpload