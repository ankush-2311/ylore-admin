import { Box, Typography } from "@mui/material";

export default function DataCard({
  value,
  label,
  trend,
  trendUp,
}: DataCardProps) {
  return (
    <Box
      sx={{
        flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 0 0" },
        minWidth: { xs: "100%", sm: "250px", md: "auto" },
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0E0E0",
        borderRadius: "10px",
        p: "20px 24px",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: 700,
          lineHeight: "30px",
          color: "#17181A",
          mb: "10px",
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "19px",
          color: "#070707",
          mb: "14px",
        }}
      >
        {label}
      </Typography>

      {/* TREND PILL */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          px: "10px",
          py: "4px",
          borderRadius: "90px",
          backgroundColor: trendUp
            ? "rgba(26, 213, 152, 0.20)" // light green
            : "rgba(255, 92, 92, 0.15)", // light red
        }}
      >
        {trendUp ? (
          <>
            <Box
              component="svg"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
            >
              <path
                d="M13.125 1.875L7.875 7.125L5.875 4.125L1.875 8.125"
                stroke="#003221"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.625 1.875H13.125V4.375"
                stroke="#003221"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "17px",
                color: "#003221",
              }}
            >
              {trend}
            </Typography>
          </>
        ) : (
          <>
            <Box
              component="svg"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
            >
              <path
                d="M13.125 8.125L7.875 2.875L5.875 5.875L1.875 1.875"
                stroke="#5B0000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.625 8.125H13.125V5.625"
                stroke="#5B0000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "17px",
                color: "#5B0000",
              }}
            >
              {trend}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}
