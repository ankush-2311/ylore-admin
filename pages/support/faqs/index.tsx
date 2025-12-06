import Layout from "@/commonComponents/Layout/Layout";
import FaqSupport from "@/components/Support/FaqSupport/FaqSupport";
import withAuth from "@/lib/WithAuth";

const index = () => {
  return (
    <Layout>
      <FaqSupport />
    </Layout>
  );
};

export default withAuth(index, true);
