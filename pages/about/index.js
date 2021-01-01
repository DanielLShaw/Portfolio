import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

import { SEO_CONSTANTS } from "../../lib/constants";

export default function About() {
  return (
    <>
      <Head>
        <title>{`${SEO_CONSTANTS.title_prefix} About`}</title>
      </Head>
      <Layout>
        <h1>About</h1>
      </Layout>
    </>
  );
}
