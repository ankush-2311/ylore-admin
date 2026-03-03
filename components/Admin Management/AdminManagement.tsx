"use client";

import CustomHeader from "@/commonComponents/Header/CustomHeader";
import SearchFilter from "@/commonComponents/Search Filter/SearchFilter";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import MessageLogo from "@/public/assets/user management/messaging.svg";
import EyeLogo from "@/public/assets/Tours/eyelogo.svg";
import EditLogo from "@/public/assets/Tours/editicon.svg";

import StatusChip from "@/commonComponents/Status Chip/StatusChip";
import { TableColumn } from "@/utils/types/userManagementType";
import AdminManagementTable from "./AdminManagementTable";

const AdminManagement = () => {
  /* ================= TYPES ================= */
  interface AdminRow {
    address: string;
    email: string;
    role: string;
    lastlogin: number;
    status: "Active" | "Deactive";
  }

  /* ================= DUMMY DATA (EXACT STRUCTURE) ================= */
  const AdminRows: AdminRow[] = [
    {
      address: "John Smith",
      email: "--/--/----",
      role: "Super Admin",
      lastlogin: 2,
      status: "Deactive",
    },
    {
      address: "James Brown",
      email: "--/--/----",
      role: "Admin",
      lastlogin: 2,
      status: "Active",
    },
    {
      address: "Erofl.cooen",
      email: "--/--/----",
      role: "Admin",
      lastlogin: 2,
      status: "Active",
    },
    {
      address: "James Brown",
      email: "--/--/----",
      role: "Moderator",
      lastlogin: 2,
      status: "Deactive",
    },
    {
      address: "John Smith",
      email: "--/--/----",
      role: "Admin",
      lastlogin: 2,
      status: "Deactive",
    },
    {
      address: "James Brown",
      email: "--/--/----",
      role: "Moderator",
      lastlogin: 2,
      status: "Active",
    },
  ];

  /* ================= COLUMNS ================= */
  const adminColumns: TableColumn<AdminRow>[] = [
    {
      key: "address",
      label: "Admin Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "role",
      label: "Role",
    },
    {
      key: "lastlogin",
      label: "Last Login (hrs)",
    },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusChip label={row.status} />,
    },
    {
      key: "action",
      label: "Action",
      render: () => (
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Image src={MessageLogo} alt="message" width={18} height={18} />

          <Image
            src={EyeLogo}
            alt="view"
            width={30}
            height={30}
            style={{ cursor: "pointer" }}
          />

          <Image
            src={EditLogo}
            alt="edit"
            width={30}
            height={30}
            style={{ cursor: "pointer" }}
          />

          <Typography
            sx={{
              fontSize: "14px",
              color: "#FF6058",
              textDecoration: "underline",
              cursor: "pointer",
              fontWeight: 400,
            }}
          >
            Activate
          </Typography>
        </Stack>
      ),
    },
  ];

  /* ================= RENDER ================= */
  return (
    <Box sx={{ padding: "0 1.5rem" }}>
      <CustomHeader title="Admin Management" />
     
   <Box sx={{mt:3}
   }>
     <AdminManagementTable
        title="Admin Users"
        columns={adminColumns}
        rows={AdminRows}
      />
      </Box>
    </Box>
  );
};

export default AdminManagement;
