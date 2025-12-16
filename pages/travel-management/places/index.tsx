import Layout from "@/commonComponents/Layout/Layout";
import Places from "@/components/Travel Management/Places/Places";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <Places/>
    </Layout>
  );
};

export default withAuth(index, true);
