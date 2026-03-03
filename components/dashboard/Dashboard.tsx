import DataCard from "@/commonComponents/Data Card/DataCard";
import DataTableComponent from "@/commonComponents/Data Table/DataTable";
import DateFilter from "@/commonComponents/Date Filter/DateFilter";
import CustomHeader from "@/commonComponents/Header/CustomHeader";
import StatusChip from "@/commonComponents/Status Chip/StatusChip";
import { Box, Chip } from "@mui/material";

const Dashboard = () => {

  const activeUsersData = [
  { uid: '#45', name: 'John Smith', email: 'j*********S@gmail.com', signup: '--/--/----', stories: 1, bookings: 2, reports: 1, status: 'Active' },
  { uid: '#45', name: 'John Smith', email: 'j*********S@gmail.com', signup: '--/--/----', stories: 2, bookings: 1, reports: 1, status: 'Active' },
  { uid: '#45', name: 'John Smith', email: 'j*********S@gmail.com', signup: '--/--/----', stories: 1, bookings: 2, reports: 1, status: 'Active' },
];

const recentBookingsData = [
  { bookingId: 'BK-12321', name: 'John Smith', tour: 'New York City Highlights Tour', bookingDate: '--/--/----', travelDate: '--/--/----', amount: '$899', status: 'Active' },
  { bookingId: 'BK-12321', name: 'John Smith', tour: 'Grand Canyon & Las Vegas Experience', bookingDate: '--/--/----', travelDate: '--/--/----', amount: '$899', status: 'Active' },
  { bookingId: 'BK-18421', name: 'John Smith', tour: 'San Francisco Golden Gate Getaway', bookingDate: '--/--/----', travelDate: '--/--/----', amount: '$899', status: 'Active' },
];



  const activeUsersColumns = [
  { key: "uid", label: "UID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email ID" },
  { key: "signup", label: "Signup Date" },
  { key: "stories", label: "Stories" },
  { key: "bookings", label: "Bookings" },
  { key: "reports", label: "Reports" },
  {
    key: "status",
    label: "Status",
    render: (row: any) => (
     <StatusChip label={row.status} />

    ),
  },
  {
    key: "edit",
    render: () => (
      <span style={{ textDecoration: "underline", cursor: "pointer" }}>
        Edit
      </span>
    ),
  },
  {
    key: "delete",
    render: () => (
      <span
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          color: "#FF6058",
          fontWeight: 700,
        }}
      >
        Delete
      </span>
    ),
  },
];




const recentBookingsColumns = [
  { key: "bookingId", label: "Booking ID" },
  { key: "name", label: "Name" },
  { key: "tour", label: "Tour Package" },
  { key: "bookingDate", label: "Booking Date" },
  { key: "travelDate", label: "Tour Started" },
  { key: "amount", label: "Amount" },
  {
    key: "status",
    label: "Status",
    render: (row: any) => (
      <StatusChip label={row.status} />

    ),
  },
  {
    key: "edit",
    render: () => (
      <span style={{ textDecoration: "underline", cursor: "pointer" }}>
        Edit
      </span>
    ),
  },
  {
    key: "delete",
    render: () => (
      <span
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          color: "#FF6058",
          fontWeight: 700,
        }}
      >
        Delete
      </span>
    ),
  },
];



  return (
    <Box sx={{ padding: "0 1.5rem" }}>
      <CustomHeader title="Dashboard" />
      <DateFilter />
       {/* Data Card Row 1 */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', mb: '10px'  }}>
          <DataCard value="24,567" label="Total Users" trend="12.7%" trendUp={true} />
          <DataCard value="2235" label="Active Creators" trend="13%" trendUp={true} />
          <DataCard value="1342" label="Total Places" trend="23%" trendUp={true} />
        </Box>

        {/* Data Row 2 */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', mb: '40px' }}>
          <DataCard value="24,567" label="Total Bookings" trend="32.7%" trendUp={true} />
          <DataCard value="2235" label="Active Stories" trend="3%" trendUp={false} />
          <DataCard value="1342" label="Revenue" trend="15%" trendUp={true} />
        </Box>

        <DataTableComponent
  title="Active Users"
  columns={activeUsersColumns}
  rows={activeUsersData}
/>;


<DataTableComponent
  title="Recent Bookings"
  columns={recentBookingsColumns}
  rows={recentBookingsData}
/>;


    </Box>
  );
};

export default Dashboard;
