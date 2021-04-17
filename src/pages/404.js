import * as React from 'react'
import Layout from 'components/PageLayout'
import Helmet from 'components/Helmet'

const NotFoundPage = () => (
  <Layout>
    <Helmet title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
