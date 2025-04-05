import { columns } from "./columns"
import { DataTable } from "./data-table";
import useApplication from "@/hooks/useApplication";


const Applications = async () => {
  const { getData } = useApplication();

  const data = await getData() || [];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
export default Applications;