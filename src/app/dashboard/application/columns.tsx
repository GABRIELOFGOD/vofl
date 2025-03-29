"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ApplicantDataType, ApplicationStatus } from "@/types/user"
import { toast } from "sonner"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils";


export const columns: ColumnDef<ApplicantDataType>[] = [
  {
    accessorKey: "fname",
    header: "First Name",
  },
  {
    accessorKey: "lname",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="cursor-pointer"
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "surah.surah",
    header: "Surah Assigned",
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="cursor-pointer"
        >
          Application Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.original.status;
      return <div>
        <p className={cn(
          "capitalize text-sm w-[100px] rounded-md h-fit py-1 text-center font-semibold",
          status === ApplicationStatus.APPROVED && "bg-primary text-white",
          status === ApplicationStatus.PENDING && "bg-yellow-500",
          status === ApplicationStatus.DENIED && "bg-destructive"
        )}>{status}</p>
      </div>
    }
  },
  {
    id: "actions",
    cell: () => {
      // const applicant = row.original

      const approveApplication = () => {
        toast.success("Application Approved");
      }
  
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={approveApplication}
            >
              Copy Surah
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Deny Application</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
