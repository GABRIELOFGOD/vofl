import { ApplicationCardProps } from "@/data/step"


const ApplicationCard = ({
  icon: Icon,
  topic, content
}: ApplicationCardProps) => {
  return (
    <div className="flex flex-col gap-5 bg-white shadow-sm p-5 rounded-md">
      <div className="flex gap-5">
        <Icon size={30} className="text-primary-foreground" />
        <p className="text-xl font-semibold">{topic}</p>
      </div>
      <p>{content}</p>
    </div>
  )
}
export default ApplicationCard