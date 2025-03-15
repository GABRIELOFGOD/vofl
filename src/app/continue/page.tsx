import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Video } from "lucide-react"

const Continue = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col gap-10 py-10 px-3">
      <div className="w-full justify-center items-center flex flex-col gap-10 md:w-[750px]">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-start text-primary font-bold text-4xl">Complete Application</p>
          <p className="text-secondary-foreground">Upload your video not longer than 1:30 minutes</p>
        </div>
        <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md flex flex-col gap-5">
          <div>
            <p className="font-semibold text-lg">Application ID</p>
            <p className="text-xs font-medium text-gray-400">Enter the Application ID generated for you during your application</p>
          </div>
          <div className="flex gap-3">
            <Input type="text" placeholder="Enter Application ID" />
            <Button variant="primary" className="font-semibold">Continue</Button>
          </div>
        </div>
        <div className="mx-auto bg-white shadow-md md:p-8 p-4 w-full rounded-md flex flex-col gap-5">
          <div>
            <p className="font-semibold text-lg">Upload video</p>
            <p className="text-xs font-medium text-gray-400">Upload the video of your Surah recitation</p>
          </div>
          <input type="file" id="hafizcert" className="hidden" accept="video/*" />
          <Label htmlFor="hafizcert" className="aspect-video w-full border-dashed flex items-center justify-center cursor-pointer border-2 border-gray-500 rounded-md animate-pulse text-gray-400 mx-auto flex-col">
            <Video size={50} />
            <p className="text-center font-semibold">Surah Video</p>
          </Label>
          <div className="w-full justify-end flex gap-5 mt-5">
            <Button variant="primary" className="cursor-pointer font-semibold">Complete Application</Button>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Continue