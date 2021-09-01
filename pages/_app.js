import '../styles/globals.css'
import Layout from '../components/layout/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content='width=device-width, initial-scale=1' />
        <meta property="og:image" content="https://i.ibb.co/XjYF17V/Screenshot-2021-09-01-at-6-44-01-PM.png"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
