"use client";

import Layout from "@/commonComponents/Layout/Layout";
import UserProfile from "@/components/Profile/UserProfile";
import withAuth from "@/lib/WithAuth";

const index = () => {
  return (
    <Layout>
      <UserProfile />
    </Layout>
  );
};

export default withAuth(index, true);
