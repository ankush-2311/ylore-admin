import Layout from "@/commonComponents/Layout/Layout";
import AdminSettings from "@/components/Admin Settings/AdminSettings";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <AdminSettings/>
    </Layout>
  );
};

export default withAuth(index, true);
