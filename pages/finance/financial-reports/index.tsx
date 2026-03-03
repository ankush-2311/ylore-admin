import Layout from "@/commonComponents/Layout/Layout";
import FinancialReports from "@/components/Finance/Financial Reports/FinancialReports";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <FinancialReports/>
    </Layout>
  );
};

export default withAuth(index, true);
