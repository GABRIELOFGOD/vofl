"use client";

import { columns, SurahTypes } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import CreateSurah from "./_components/CreateSurah";
import useSurah from "@/hooks/useSurah";
import { toast } from "sonner";
import Spinner from "react-spinkit";
import { useRouter } from "next/navigation";


const Surah = () => {
  const [createSurah, setCreateSurah] = useState<boolean>(false);
  const [data, setData] = useState<SurahTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const { getSurah } = useSurah();

  const getSurahData = async () => {
    setIsLoading(true);
    try {
      const surah = await getSurah();
      setData(surah.surahs);
    } catch (error: unknown) {
  
      if (error instanceof Error) {
        toast.error(error.message);
      } else if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as any).response === "object" &&
        "data" in (error as any).response &&
        typeof (error as any).response.data === "object" &&
        "message" in (error as any).response.data
      ) {
        // Handle API error responses
        toast.error((error as any).response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getSurahData();
  }, [createSurah]);

  const closeModalSurah = () => {
    setCreateSurah(false);
    router.refresh();
  }

  return (
    <div className="py-10 px-3 md:px-10">
      <div className="flex justify-between mb-5">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-start text-primary font-bold text-4xl">Surah</p>
          <p className="text-secondary-foreground">Available Surah for the competition</p>
        </div>
        <div className="my-auto">
          <Button
            variant="primary"
            onClick={() => setCreateSurah(true)}
          >
            New Surah
          </Button>
        </div>
      </div>
      {isLoading && <div className="w-full h-[205px] flex items-center justify-center gap-3">
        <Spinner color="black" name="circle" />
        Loading
      </div>}
      {!isLoading && <div>
        <DataTable columns={columns} data={data} />
      </div>}
      {createSurah && (
        <div className="fixed top-0 left-0 bg-white/80 h-full w-full flex justify-center items-center flex-col p-3">
          <CreateSurah close={closeModalSurah} />
        </div>
      )}
    </div>
  )
}
export default Surah;