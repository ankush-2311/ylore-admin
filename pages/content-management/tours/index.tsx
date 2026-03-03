import Layout from "@/commonComponents/Layout/Layout";
import AdminSettings from "@/components/Admin Management/AdminManagement";
import Tours from "@/components/Content Management/Tours /Tours";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <Tours/>
    </Layout>
  );
};

export default withAuth(index, true);
