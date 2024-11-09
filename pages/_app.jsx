import Head from 'next/head';

import Layout from '../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/mailchimp.css';
import '../styles/video.css';

export  default function ({ Component, pageProps }) {
  const fontsUrl = "https://fonts.googleapis.com/css" +
    "?family=EB+Garamond:400,700&display=swap";

  const pageTitle = pageProps.pageTitle || "Zaratan Coliving";

  return (
    <div>
      <link href={fontsUrl} rel="stylesheet" />

      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
