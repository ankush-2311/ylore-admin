import Layout from "@/commonComponents/Layout/Layout";
import CreatorsWall from "@/components/Community Content/Creators Wall /CreatorsWall";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <CreatorsWall/>
    </Layout>
  );
};

export default withAuth(index, true);
