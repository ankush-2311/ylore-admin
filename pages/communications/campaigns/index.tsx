import Layout from "@/commonComponents/Layout/Layout";
import Campaigns from "@/components/Communications/Campaigns/Campaigns";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <Campaigns/>
    </Layout>
  );
};

export default withAuth(index, true);
