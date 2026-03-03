import Layout from "@/commonComponents/Layout/Layout";
import StoriesAndPosts from "@/components/Content Management/Mistory/Mistory";

import withAuth from "@/lib/WithAuth";


const index = () => {
  return (
    <Layout>
      <StoriesAndPosts/>
    </Layout>
  );
};

export default withAuth(index, true);
