import Layout from "@/commonComponents/Layout/Layout";
import SalesOverview from "@/components/Finance/Sales Overview/SalesOverview";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <SalesOverview/>
    </Layout>
  );
};

export default withAuth(index, true);
