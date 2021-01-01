import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";

import { SEO_CONSTANTS } from "../lib/constants";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{`${SEO_CONSTANTS.title_prefix} Home`}</title>
      </Head>
      <Layout>
        <h1>HOMEPAGE</h1>
      </Layout>
    </>
  );
};

export default HomePage;
