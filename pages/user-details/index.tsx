import Layout from "@/commonComponents/Layout/Layout"
import UserDetails from "@/components/User Management/User Details/UserDetails";


import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <UserDetails/>
    </Layout>
  );
};

export default withAuth(index, true);
