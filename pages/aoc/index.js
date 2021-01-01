import React from "react";
import Head from "next/head";
import SPALink from "../../components/SPALink";
import Layout from "../../components/Layout";
import { SEO_CONSTANTS } from "../../lib/constants";

export default function AoC() {
  return (
    <>
      <Head>
        <title>{`${SEO_CONSTANTS.title_prefix} Adevent of Code`}</title>
      </Head>
      <Layout>
        <h1>Advent of Code</h1>
        <SPALink href="/aoc/2020">2020</SPALink>
      </Layout>
    </>
  );
}
