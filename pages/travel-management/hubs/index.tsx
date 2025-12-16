import Layout from "@/commonComponents/Layout/Layout";
import Hubs from "@/components/Travel Management/Hubs/Hubs";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <Hubs/>
    </Layout>
  );
};

export default withAuth(index, true);
