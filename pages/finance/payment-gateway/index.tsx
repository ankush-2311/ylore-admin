import Layout from "@/commonComponents/Layout/Layout";
import PaymentGateway from "@/components/Finance/Payment Gateway/PaymentGateway";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <PaymentGateway/>
    </Layout>
  );
};

export default withAuth(index, true);
