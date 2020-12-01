import { SP } from "next/dist/next-server/lib/utils";
import React from "react";
import SPALink from "../SPALink";

const AoCContainer = ({ day, aocLink, Part1, Part2 }) => {
  const questionLink = `${aocLink}/day/${day}`;
  return (
    <details className="aoc-container">
      <summary className="aoc-container__day">Day {day}</summary>
      <SPALink className="aoc-container__day-link" href={questionLink} newTab>
        Question Link
      </SPALink>
      <div className="grid-x grid-margin-x aoc-container__solutions">
        {Part1 && (
          <section className="aoc-container__solution cell medium-6">
            <p className="aoc-container__title">Part 1</p>
            <Part1 />
          </section>
        )}
        {Part2 && (
          <section className="aoc-container__solution cell medium-6">
            <p className="aoc-container__title">Part 2</p>
            <Part2 />
          </section>
        )}
      </div>
    </details>
  );
};

export default AoCContainer;
