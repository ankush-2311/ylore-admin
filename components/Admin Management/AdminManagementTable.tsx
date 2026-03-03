"use client";

import {
  Paper,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CommonTableProps } from "@/utils/types/userManagementType";
import { useRouter } from "next/navigation";
import SearchFilter from "@/commonComponents/Search Filter/SearchFilter";

function AdminManagementTable<T>({
  title,
  viewAllText = "View all",
  columns,
  rows,
}: CommonTableProps<T>) {
  return (
    <Paper sx={{ border: "1.132px solid #D5E1EA", p: "20px", mb: "40px" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "17px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
          {title}
        </Typography>

        <Box sx={{ width: "90%" }}>
          <SearchFilter placeholder="Search Admins" />
        </Box>
      </Box>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ borderBottom: "0.959px solid #D5E1EA" }}>
              {columns.map((col, i) => (
                <TableCell
                  key={i}
                  align={col.align ?? "left"}
                  sx={{ fontSize: "10px", fontWeight: 700, py: "10px" }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex} sx={{ cursor: "pointer" }}>
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    align={col.align ?? "left"}
                    sx={{ fontSize: "14px", py: "14px" }}
                  >
                    {col.render ? col.render(row) : (row as any)[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default AdminManagementTable;
