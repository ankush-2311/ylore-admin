import CustomHeader from "@/commonComponents/Header/CustomHeader";
import SearchFilter from "@/commonComponents/Search Filter/SearchFilter";
import { Box, Stack, Typography } from "@mui/material";
import EyeLogo from "../../../public/assets/Tours/eyelogo.svg";
import EditLogo from "../../../public/assets/Tours/editicon.svg";
import DeleteLogo from "../../../public/assets/Tours/deleteicon.svg";
import { TableColumn } from "@/utils/types/userManagementType";
import Image from "next/image";
import DeleteAccountModal from "@/modals/DeleteAccountModal";
import { useState } from "react";
import TourTable from "./ToursTable";
import tours from "@/pages/content-management/tours";

const Tours = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleDelete = () => {
    console.log("User deleted");
    
  };

   interface ToursRow {
      user: string;
      joiningDate: string;
      lastActive: string;
      reports: number;
      status: "Active" | "Deactive";
    }
  
    const TourRows: ToursRow[] = [
      {
        user: "John Smith",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Deactive",
      },
      {
        user: "James Brown",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Active",
      },
      {
        user: "Erofl.cooen",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Active",
      },
      {
        user: "James Brown",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Deactive",
      },
      {
        user: "John Smith",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Deactive",
      },
      {
        user: "James Brown",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Active",
      },
      {
        user: "Erofl.cooen",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Active",
      },
      {
        user: "James Brown",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Deactive",
      },
      {
        user: "John Smith",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Deactive",
      },
      {
        user: "James Brown",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Active",
      },
      {
        user: "Erofl.cooen",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Active",
      },
      {
        user: "James Brown",
        joiningDate: "--/--/----",
        lastActive: "2hr ago",
        reports: 2,
        status: "Deactive",
      },
    ];
  
    const TourColumns: TableColumn<ToursRow>[] = [
      {
        key: "user",
        label: "User",
      },
      {
        key: "joiningDate",
        label: "Joining Date",
      },
      {
        key: "lastActive",
        label: "Last Active",
      },
      {
        key: "reports",
        label: "Reports",
      },
      {
        key: "status",
        label: "Status",
        render: (row) => (
          <Typography
            sx={{
              fontWeight: 400,
              color: row.status === "Active" ? "#115525" : "#FF6058",
            }}
          >
            {row.status}
          </Typography>
        ),
      },
  {
    key: "action",
    label: "Action",
    render: (row) => (
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Image src={EyeLogo} alt="message" width={30} height={30} />
  
     
  
        {/* EDIT */}
          <Image src={EditLogo} alt="message" width={30} height={30} />
  
        {/* ACTIVATE */}
        <Image src={DeleteLogo} alt="message" width={30} height={30} />
      </Stack>
    ),
  }
  
  
    ];
  
  return (
    <>
    <Box sx={{ padding: "0 1.5rem" }}>
      <CustomHeader title="Tours & Packages" />
      <SearchFilter placeholder="Search Tours" />
     <Box sx={{mt:4}}>
     <TourTable
          title="Active Users"
          columns={TourColumns}
          rows={TourRows}
        />
     </Box>
    </Box>
      <DeleteAccountModal
              isOpen={openDeleteModal}
              onClose={() => setOpenDeleteModal(false)}
              onConfirm={handleDelete}
            />
    </>
  );
};

export default Tours