import React from "react";
import ReactMarkdown from "react-markdown";

import AoCContainer from "../../../components/AdventOfCode/AoCContainer";
import Layout from "../../../components/Layout";

import summary2020 from "../../../components/AdventOfCode/2020/summary2020.md";

import {
  Day1Part1,
  Day1Part2,
} from "../../../components/AdventOfCode/2020/Day1";
import {
  Day2Part1,
  Day2Part2,
} from "../../../components/AdventOfCode/2020/Day2";
import { Day3 } from "../../../components/AdventOfCode/2020/Day3";
import {
  Day4Part1,
  Day4Part2,
} from "../../../components/AdventOfCode/2020/Day4";
import {
  Day5Part1,
  Day5Part2,
} from "../../../components/AdventOfCode/2020/Day5";

import {
  Day6Part1,
  Day6Part2,
} from "../../../components/AdventOfCode/2020/Day6";
import {
  Day7Part1,
  Day7Part2,
} from "../../../components/AdventOfCode/2020/Day7";
import {
  Day8Part1,
  Day8Part2,
} from "../../../components/AdventOfCode/2020/Day8";

import {
  Day9Part1,
  Day9Part2,
} from "../../../components/AdventOfCode/2020/Day9";
import { Day10Part1 } from "../../../components/AdventOfCode/2020/Day10";

import {
  Day11Part1,
  Day11Part2,
} from "../../../components/AdventOfCode/2020/Day11";
import {
  Day12Part1,
  Day12Part2,
} from "../../../components/AdventOfCode/2020/Day12";
import { Day13Part1 } from "../../../components/AdventOfCode/2020/Day13";
import {
  Day14Part1,
  Day14Part2,
} from "../../../components/AdventOfCode/2020/Day14";
import {
  Day15Part1,
  Day15Part2,
} from "../../../components/AdventOfCode/2020/Day15";
import {
  Day16Part1,
  Day16Part2,
} from "../../../components/AdventOfCode/2020/Day16";
import { Day17 } from "../../../components/AdventOfCode/2020/Day17";
import { Day19Part1 } from "../../../components/AdventOfCode/2020/Day19";
import { Day20Part1 } from "../../../components/AdventOfCode/2020/Day20";
import {
  Day21Part1,
  Day21Part2,
} from "../../../components/AdventOfCode/2020/Day21";

const AoC2020 = () => {
  const aocLink = "https://adventofcode.com/2020";

  return (
    <Layout>
      <ReactMarkdown>{summary2020}</ReactMarkdown>
      <AoCContainer
        day={1}
        aocLink={aocLink}
        Part1={Day1Part1}
        Part2={Day1Part2}
      />
      <AoCContainer
        day={2}
        aocLink={aocLink}
        Part1={Day2Part1}
        Part2={Day2Part2}
      />
      <AoCContainer day={3} aocLink={aocLink} Part1={Day3} />
      <AoCContainer
        day={4}
        aocLink={aocLink}
        Part1={Day4Part1}
        Part2={Day4Part2}
      />
      <AoCContainer
        day={5}
        aocLink={aocLink}
        Part1={Day5Part1}
        Part2={Day5Part2}
      />
      <AoCContainer
        day={6}
        aocLink={aocLink}
        Part1={Day6Part1}
        Part2={Day6Part2}
      />
      <AoCContainer
        day={7}
        aocLink={aocLink}
        Part1={Day7Part1}
        Part2={Day7Part2}
      />
      <AoCContainer
        day={8}
        aocLink={aocLink}
        Part1={Day8Part1}
        Part2={Day8Part2}
      />
      <AoCContainer
        day={9}
        aocLink={aocLink}
        Part1={Day9Part1}
        Part2={Day9Part2}
      />
      <AoCContainer day={10} aocLink={aocLink} Part1={Day10Part1} />
      <AoCContainer
        day={11}
        aocLink={aocLink}
        Part1={Day11Part1}
        Part2={Day11Part2}
      />
      <AoCContainer
        day={12}
        aocLink={aocLink}
        Part1={Day12Part1}
        Part2={Day12Part2}
      />
      <AoCContainer day={13} aocLink={aocLink} Part1={Day13Part1} />

      <AoCContainer
        day={14}
        aocLink={aocLink}
        Part1={Day14Part1}
        Part2={Day14Part2}
      />
      <AoCContainer
        day={15}
        aocLink={aocLink}
        Part1={Day15Part1}
        Part2={Day15Part2}
      />
      <AoCContainer
        day={16}
        aocLink={aocLink}
        Part1={Day16Part1}
        Part2={Day16Part2}
      />
      <AoCContainer day={17} aocLink={aocLink} Part1={Day17} />
      <AoCContainer day={19} aocLink={aocLink} Part1={Day19Part1} />
      <AoCContainer day={20} aocLink={aocLink} Part1={Day20Part1} />
      <AoCContainer
        day={21}
        aocLink={aocLink}
        Part1={Day21Part1}
        Part2={Day21Part2}
      />
    </Layout>
  );
};

export default AoC2020;
