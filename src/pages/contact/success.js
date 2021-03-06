import * as React from 'react'
import Layout from 'components/PageLayout'
import Helmet from 'components/Helmet'

const ContactSuccessPage = () => (
  <Layout showFooter={false}>
    <Helmet title="Success!" />
    <h1>Thanks for reacing out!</h1>
    <p>{`I'll respond within a few days.`}</p>
  </Layout>
)

export default ContactSuccessPage
