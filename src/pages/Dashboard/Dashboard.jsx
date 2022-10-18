import React from 'react'
import { Layout } from 'antd'
const { Content } = Layout

export const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Content className="site-layout-background">Welcome!</Content>
      </Layout>
    </div>
  )
}
