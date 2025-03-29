import { LucideIcon } from "lucide-react";

interface InfoProps {
  icon: LucideIcon;
  content: React.ReactNode;
  title: string;
}

const DashboardInfo = ({
  icon: Icon,
  content,
  title,
}: InfoProps) => {
  return (
    <div className="bg-primary-foreground/20 rounded-lg p-4 w-full flex flex-col gap-3 shadow-sm">
      <div className="flex gap-5">
        <div className="p-2 rounded-md bg-primary/30 h-fit w-fit">
          <Icon className="text-primary-foreground" size={20} />
        </div>
        <p className="text-primary font-semibold text-xl">{title}</p>
      </div>
      {content}
    </div>
  )
}
export default DashboardInfo;