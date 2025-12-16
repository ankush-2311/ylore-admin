import Layout from "@/commonComponents/Layout/Layout";
import AnalyticsAndReports from "@/components/Analytics & Reports/AnalyticsAndReports";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <AnalyticsAndReports/>
    </Layout>
  );
};

export default withAuth(index, true);
