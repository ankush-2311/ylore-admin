import Layout from "@/commonComponents/Layout/Layout";
import FAQ from "@/components/Communications/FAQ/FAQ";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <FAQ/>
    </Layout>
  );
};

export default withAuth(index, true);
