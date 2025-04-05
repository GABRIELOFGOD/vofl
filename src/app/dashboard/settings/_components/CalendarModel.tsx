import { Input } from "@/components/ui/input";

const CalendarModel = ({
  date,
  setDate,
}: {
  date: Date | null,
  setDate: (date: Date | null) => void,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50 flex justify-center items-center">
      <Input
        type="date"
        value={date ? date.toISOString().split("T")[0] : ""}
        onChange={(e) => {
          const selectedDate = new Date(e.target.value);
          setDate(selectedDate);
        }}
        className="bg-white text-black p-2 rounded-md"
      />
    </div>
  )
}
export default CalendarModel