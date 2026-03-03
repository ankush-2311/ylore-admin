import Layout from "@/commonComponents/Layout/Layout";
import PushNotifications from "@/components/Communications/Push Notifications/PushNotifications";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <PushNotifications/>
    </Layout>
  );
};

export default withAuth(index, true);
