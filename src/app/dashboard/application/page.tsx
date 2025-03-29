import { columns } from "./columns"
// import applicants from "@/data/user-data"
import { ApplicantDataType } from "@/types/user"
import { DataTable } from "./data-table";

async function getData(): Promise<ApplicantDataType[]> {
  return [];
}

const Applications = async () => {
  const data = await getData()
 
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
export default Applications