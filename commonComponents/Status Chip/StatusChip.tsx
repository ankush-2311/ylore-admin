import { Chip } from "@mui/material";

const StatusChip = ({ label }: { label: string }) => {
  const isActive = label?.toLowerCase() === "active";

  return (
    <Chip
      label={label}
      sx={{
        height: "26px",
        borderRadius: "90px",
        px: "10px",
        fontSize: "14px",
        fontWeight: 400,
        backgroundColor: isActive
          ? "rgba(26, 213, 152, 0.20)" 
          : "rgba(255, 92, 92, 0.15)", 
        color: isActive ? "#115525" : "#5B0000",
      }}
    />
  );
};
export default StatusChip;