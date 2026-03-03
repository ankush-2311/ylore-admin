"use client";

import CustomHeader from "@/commonComponents/Header/CustomHeader";
import SearchFilter from "@/commonComponents/Search Filter/SearchFilter";
import { Box, Chip } from "@mui/material";
import ProfileDetails from "./ProfileDetails";
import EngagementOverview from "./Engagament Overview/EngagementOverview";
import RecentActivity from "./RecentActivity";
import BookingHistory from "./BookingHistory";
import PaymentHistory from "./PaymentHistory";
import SavedContent from "./SavedContent";
import {
  BookingHistoryRow,
  bookingHistoryRows,
} from "./UserDetailDummyData";
import { DataTableColumn } from "@/utils/types/userManagementType";

const UserDetails = () => {
 const bookingHistoryColumns: DataTableColumn<BookingHistoryRow>[] = [
  { key: "bookingId", label: "Booking ID" },
  { key: "tour", label: "Tour" },
  { key: "date", label: "Date" },
  { key: "amount", label: "Amount" },
  {
    key: "status",
    label: "Status",
    render: (row) => {
      const isConfirmed = row.status === "Confirmed";

      return (
        <Chip
          label={row.status}
          size="small"
          sx={{
            height: "26px",
            borderRadius: "90px",
            fontSize: "13px",
            
            fontWeight: 500,
            backgroundColor: isConfirmed
              ? "#115525" 
              : "#D2E4FF",
            color: isConfirmed ? "white" : "#1E40AF",
          }}
        />
      );
    },
  },
];


  return (
    <Box sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
      <CustomHeader title="User Details" />
      <SearchFilter />
      <ProfileDetails />
      <EngagementOverview />

      {/* ---------- ROW 1 ---------- */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          gap: 3,
          mb: 3,
          alignItems: "stretch",
        }}
      >
        <RecentActivity />
        <BookingHistory
          title="Booking History"
          columns={bookingHistoryColumns}
          rows={bookingHistoryRows}
        />
      </Box>

      {/* ---------- ROW 2 ---------- */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          gap: 3,
          mb: 3,
          alignItems: "stretch",
        }}
      >
        <PaymentHistory
          title="Payment History"
          columns={bookingHistoryColumns}
          rows={bookingHistoryRows}
        />
        <SavedContent />
      </Box>
    </Box>
  );
};

export default UserDetails;
