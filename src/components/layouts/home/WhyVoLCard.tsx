import { ApplicationCardProps } from "@/data/step"

const WhyVoLCard = ({
  icon: Icon,
  topic, content
}: ApplicationCardProps) => {
  return (
    <div className="flex gap-5 bg-white shadow-sm p-5 rounded-md justify-between">
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-primary">{topic}</p>
        <p>{content}</p>
      </div>
      <Icon
        size={50}
        className="my-auto text-primary"
      />
    </div>
  )
}
export default WhyVoLCard