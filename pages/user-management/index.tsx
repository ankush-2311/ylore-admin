import Layout from "@/commonComponents/Layout/Layout"
import UserManagement from "@/components/User Management/UserManagement";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <UserManagement/>
    </Layout>
  );
};

export default withAuth(index, true);
