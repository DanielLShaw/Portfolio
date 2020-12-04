import React from "react";
import classNames from "classnames";
import SPALink from "../SPALink";

const AoCContainer = ({ day, aocLink, Part1, Part2 }) => {
  const questionLink = `${aocLink}/day/${day}`;

  const containerClasses = classNames(["aoc-container", `day-${day}`]);

  const solutionClasses = classNames({
    "aoc-container__solution": true,
    cell: true,
    "medium-6": Part1 && Part2,
  });

  return (
    <details className={containerClasses}>
      <summary className="aoc-container__day">Day {day}</summary>
      <SPALink className="aoc-container__day-link" href={questionLink} newTab>
        Question Link
      </SPALink>
      <div className="grid-x grid-margin-x aoc-container__solutions">
        {Part1 && (
          <section className={solutionClasses}>
            <Part1 />
          </section>
        )}
        {Part2 && (
          <section className={solutionClasses}>
            <Part2 />
          </section>
        )}
      </div>
    </details>
  );
};

export default AoCContainer;
