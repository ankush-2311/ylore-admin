import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidenav from "@/components/Sidenav/Sidenav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Sidenav />
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: `295px`,
          transition: "margin-left 0.3s ease",
          width: `calc(100% - 295px)`,
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
