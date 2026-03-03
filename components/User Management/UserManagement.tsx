import CustomHeader from "@/commonComponents/Header/CustomHeader";
import SearchFilter from "@/commonComponents/Search Filter/SearchFilter";

import { TableColumn } from "@/utils/types/userManagementType";
import { Box, Chip, Stack, Typography } from "@mui/material";
import UserManagementTable from "./UserManagementTable";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EngagementOverview from "./User Details/Engagament Overview/EngagementOverview";
import EyeLogo from "../../public/assets/Tours/eyelogo.svg";
import EditLogo from "../../public/assets/Tours/editicon.svg";

import Image from "next/image";
import MessageLogo from "../../public/assets/user management/messaging.svg";
import { useState } from "react";
import EditUserDetailsModal from "@/modals/EditUserDetailModal";
import { useRouter } from "next/navigation";
import StatusChip from "@/commonComponents/Status Chip/StatusChip";

const UserManagement = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const router = useRouter();

  const handleRowClick = () => {
    router.push("/user-details");
  };

  interface ActiveUserRow {
    user: string;
    joiningDate: string;
    lastActive: string;
    reports: number;
    status: "Active" | "Deactive";
  }

  const activeUsersRows: ActiveUserRow[] = [
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

  const activeUsersColumns: TableColumn<ActiveUserRow>[] = [
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
      render: (row) => <StatusChip label={row.status} />,
    },
    {
      key: "action",
      label: "Action",
      render: (row) => (
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Image src={MessageLogo} alt="message" width={18} height={18} />

          {/* VIEW */}
       

          {/* VIEW */}
          {/* EDIT */}
          <Image
            src={EyeLogo}
            onClick={(e) => {
              e.stopPropagation();
              handleRowClick();
            }}
            alt="message"
            width={30}
            height={30}
          />

          {/* ACTIVATE */}
          <Image
            src={EditLogo}
            onClick={(e) => {
              e.stopPropagation();
              setOpenEditModal(true);
            }}
            alt="message"
            width={30}
            height={30}
          />

          {/* ACTIVATE */}
          <Typography
            onClick={(e) => {
              e.stopPropagation();
              // activate logic later
            }}
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

  return (
    <>
      <Box sx={{ padding: "0 1.5rem" }}>
        <CustomHeader title="User Management" />
        <SearchFilter placeholder="Search Users" />
        <Box sx={{ mt: 4 }}>
          <UserManagementTable
            title="Active Users"
            columns={activeUsersColumns}
            rows={activeUsersRows}
          />
        </Box>
      </Box>
      <EditUserDetailsModal
        isOpen={openEditModal}
        onClose={() => setOpenEditModal(false)}
        onSave={() => setOpenEditModal(false)}
      />
    </>
  );
};

export default UserManagement;
