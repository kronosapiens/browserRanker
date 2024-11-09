import Head from 'next/head';

import Layout from '../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

export  default function ({ Component, pageProps }) {
  const fontsUrl = "https://fonts.googleapis.com/css" +
    "?family=EB+Garamond:400,700&display=swap";

  return (
    <div>
      <link href={fontsUrl} rel="stylesheet" />

      <Head>
        <title>Power Ranker</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
