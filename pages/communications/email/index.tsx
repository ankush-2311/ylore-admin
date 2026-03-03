import Layout from "@/commonComponents/Layout/Layout";
import Email from "@/components/Communications/Email/Email";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <Email/>
    </Layout>
  );
};

export default withAuth(index, true);
