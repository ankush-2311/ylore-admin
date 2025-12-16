import Layout from "@/commonComponents/Layout/Layout";
import BookingAndOrders from "@/components/Booking & Orders/BookingAndOrders";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <BookingAndOrders/>
    </Layout>
  );
};

export default withAuth(index, true);
