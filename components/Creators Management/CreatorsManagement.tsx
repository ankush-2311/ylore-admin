import DataCard from "@/commonComponents/Data Card/DataCard";
import CustomHeader from "@/commonComponents/Header/CustomHeader";
import { Box } from "@mui/material";
import CreatorsList from "./CreatorsList";

const CreatorsManagement = () => {
  return (
    <Box sx={{ padding: "0 1.5rem" }}>
      <CustomHeader title="Creators Management" />
       {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', mb: '10px'  }}>
                <DataCard value="24,567" label="Total Users" trend="12.7%" trendUp={true} />
                <DataCard value="2235" label="Active Creators" trend="13%" trendUp={true} />
                <DataCard value="1342" label="Total Places" trend="23%" trendUp={true} />
                  <DataCard value="1342" label="Total Places" trend="23%" trendUp={true} />
              </Box>
              <Box sx={{mt:4}}>
        <CreatorsList/>
        </Box> */}
    </Box>
  );
};

export default CreatorsManagement;