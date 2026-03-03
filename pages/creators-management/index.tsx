import Layout from "@/commonComponents/Layout/Layout";
import CreatorsManagement from "@/components/Creators Management/CreatorsManagement";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <CreatorsManagement/>
    </Layout>
  );
};

export default withAuth(index, true);
