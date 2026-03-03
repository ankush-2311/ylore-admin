"use client";

import { CommonTableProps } from "@/utils/types/dataTableType";
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

function BookingHistory<T>({
  title,
  viewAllText = "View all",
  columns,
  rows,
}: CommonTableProps<T>) {
  return (
    <Paper sx={{ border: "1.132px solid #D5E1EA", p: "20px", mb: "40px" , height: '100%'}}>
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

        <Typography
          sx={{
            fontSize: "13.587px",
            fontWeight: 400,
            opacity: 0.5,
            cursor: "pointer",
          }}
        >
          {viewAllText}
        </Typography>
      </Box>

      {/* Table */}
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ borderBottom: "0.959px solid #D5E1EA" }}>
              {columns.map((col, index) => (
                <TableCell
                  key={index}
                  align={col.align ?? "left"}
                  sx={{
                    fontSize: "10px",
                    fontWeight: 700,
                    py: "10px",
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    align={col.align ?? "left"}
                    sx={{
                      fontSize: "14px",
                      py: "14px",
                    }}
                  >
                    {col.render
                      ? col.render(row)
                      : (row as any)[col.key]}
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

export default BookingHistory;