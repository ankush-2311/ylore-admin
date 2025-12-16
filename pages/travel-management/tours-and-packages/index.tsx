import Layout from "@/commonComponents/Layout/Layout";
import AdminSettings from "@/components/Admin Settings/AdminSettings";
import ToursAndPackages from "@/components/Travel Management/Tours & Packages/ToursAndPackages";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <ToursAndPackages/>
    </Layout>
  );
};

export default withAuth(index, true);
