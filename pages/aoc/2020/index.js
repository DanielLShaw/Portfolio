import React from "react";
import Head from "next/head";

import AoCContainer from "../../../components/AdventOfCode/AoCContainer";
import Layout from "../../../components/Layout";
import { SEO_CONSTANTS } from "../../../lib/constants";

import {
  Day1Part1,
  Day1Part2,
} from "../../../components/AdventOfCode/2020/Day1";
import Day1ReadMe from "../../../components/AdventOfCode/2020/Day1/readme.md";
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
import {
  Day22Part1,
  Day22Part2,
} from "../../../components/AdventOfCode/2020/Day22";

const AoC2020 = () => {
  const days = [
    { day: 1, parts: [Day1Part1, Day1Part2], stars: 2, markdown: Day1ReadMe },
    { day: 2, parts: [Day2Part1, Day2Part2], stars: 2 },
    { day: 3, parts: [Day3], stars: 2 },
    { day: 4, parts: [Day4Part1, Day4Part2], stars: 2 },
    { day: 5, parts: [Day5Part1, Day5Part2], stars: 2 },
    { day: 6, parts: [Day6Part1, Day6Part2], stars: 2 },
    { day: 7, parts: [Day7Part1, Day7Part2], stars: 2 },
    { day: 8, parts: [Day8Part1, Day8Part2], stars: 2 },
    { day: 9, parts: [Day9Part1, Day9Part2], stars: 2 },
    { day: 10, parts: [Day10Part1], stars: 1 },
    { day: 11, parts: [Day11Part1, Day11Part2], stars: 2 },
    { day: 12, parts: [Day12Part1, Day12Part2], stars: 2 },
    { day: 13, parts: [Day13Part1], stars: 1 },
    { day: 14, parts: [Day14Part1, Day14Part2], stars: 2 },
    { day: 15, parts: [Day15Part1, Day15Part2], stars: 2 },
    { day: 16, parts: [Day16Part1, Day16Part2], stars: 2 },
    { day: 17, parts: [Day17], stars: 2 },
    { day: 18 },
    { day: 19, parts: [Day19Part1], stars: 1 },
    { day: 20, parts: [Day20Part1], stars: 1 },
    { day: 21, parts: [Day21Part1, Day21Part2], stars: 2 },
    { day: 22, parts: [Day22Part1, Day22Part2], stars: 2 },
    { day: 23 },
    { day: 24 },
    { day: 25 },
  ];

  return (
    <>
      <Head>
        <title>{`${SEO_CONSTANTS.title_prefix} Advent of Code | 2020`}</title>
        <description>Advent of Code 2020 answers and commentary</description>
      </Head>
      <Layout>
        <h1>Advent of Code - 2020</h1>
        <div className="grid-x">
          {days.map(({ day, parts, markdown, stars }) => (
            <AoCContainer
              className="cell small-4 medium-3 large-2"
              key={day}
              parts={parts}
              day={day}
              markdown={markdown}
              stars={stars}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default AoC2020;
