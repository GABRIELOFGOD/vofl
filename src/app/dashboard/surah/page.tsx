import surahData from "@/data/surah-data";
import { SurahTypes, columns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button";
 
async function getData(): Promise<SurahTypes[]> {
  // Fetch data from your API here.  
  return surahData;
}

const Surah = async () => {
  const data = await getData();

  return (
    <div className="py-10 px-3 md:px-10">
      <div className="flex justify-between mb-5">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-start text-primary font-bold text-4xl">Surah</p>
          <p className="text-secondary-foreground">Available Surah for the competition</p>
        </div>
        <div className="my-auto">
          <Button variant="primary">
            New Surah
          </Button>
        </div>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
export default Surah