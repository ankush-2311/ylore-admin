import Layout from "@/commonComponents/Layout/Layout";

import Distribution from "@/components/Finance/Commision/Commision";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <Distribution/>
    </Layout>
  );
};

export default withAuth(index, true);
