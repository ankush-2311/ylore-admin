import Layout from '@/commonComponents/Layout/Layout'
import Dashboard from '@/components/dashboard/Dashboard'
import withAuth from '@/lib/WithAuth'
import React from 'react'

const index = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

export default withAuth(index, true)
