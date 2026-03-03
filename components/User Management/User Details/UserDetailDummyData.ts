import { Chip } from "@mui/material";
import { DataTableColumn } from "@/utils/types/userManagementType";

export interface BookingHistoryRow {
  bookingId: string;
  tour: string;
  date: string;
  amount: string;
  status: "Confirmed" | "Completed";
}

export const bookingHistoryRows: BookingHistoryRow[] = [
  {
    bookingId: "BK-8901",
    tour: "Tokyo Tour",
    date: "2025-12-20",
    amount: "$450",
    status: "Confirmed",
  },
  {
    bookingId: "BK-8901",
    tour: "Tokyo Tour",
    date: "2025-12-20",
    amount: "$450",
    status: "Completed",
  },
  {
    bookingId: "BK-8901",
    tour: "Tokyo Tour",
    date: "2025-12-20",
    amount: "$450",
    status: "Confirmed",
  },
   {
    bookingId: "BK-8901",
    tour: "Tokyo Tour",
    date: "2025-12-20",
    amount: "$450",
    status: "Completed",
  }, {
    bookingId: "BK-8901",
    tour: "Tokyo Tour",
    date: "2025-12-20",
    amount: "$450",
    status: "Completed",
  },
];

