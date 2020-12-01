import React from "react";
import AoCContainer from "../../../components/AdventOfCode/AoCContainer";
import Layout from "../../../components/Layout";
import SPALink from "../../../components/SPALink";

import {
  Day1Part1,
  Day1Part2,
} from "../../../components/AdventOfCode/2020/Day1";

const AoC2020 = () => {
  const aocLink = "https://adventofcode.com/2020";

  return (
    <Layout>
      <h1>
        <SPALink href={aocLink}>Advent of Code 2020</SPALink>
      </h1>
      <AoCContainer
        day={1}
        aocLink={aocLink}
        Part1={Day1Part1}
        Part2={Day1Part2}
      />
    </Layout>
  );
};

export default AoC2020;
