import Layout from '@/commonComponents/Layout/Layout'
import EmailSupport from '@/components/Support/EmailSupport/EmailSupport'
import withAuth from '@/lib/WithAuth'

const index = () => {
  return (
    <Layout>
      <EmailSupport />
    </Layout>
  )
}

export default withAuth(index,true)
