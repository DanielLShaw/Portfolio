import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { part1Modified } from "./solution";
import terrain from "./input.txt";
import explanationMarkdown from "./explanation.md";

export const Day3 = () => {
  const [slopeList, setSlopeList] = useState([
    [1, 1, null],
    [3, 1, null],
    [5, 1, null],
    [7, 1, null],
    [1, 2, null],
  ]);

  const [answer, setAnswer] = useState(0);

  const handleSlopeListChange = (index, directionIndex, value) => {
    const updatedSlopeList = [...slopeList];

    if (typeof directionIndex === "number" && value) {
      updatedSlopeList[index][directionIndex] = parseInt(value, 10) || 0;
    }

    if (updatedSlopeList[index][directionIndex] !== 0) {
      const [right, down] = updatedSlopeList[index];
      const treesHit = part1Modified(terrain, right, down);
      updatedSlopeList[index][2] = treesHit;
      let answer = 1;
      updatedSlopeList.forEach(([, , treesHit]) => {
        answer *= treesHit;
      });
      setAnswer(answer);
      setSlopeList(updatedSlopeList);
    }
  };

  useEffect(() => {
    for (var i = 0; i < slopeList.length; i++) {
      handleSlopeListChange(i);
    }
  }, []);

  return (
    <>
      <ReactMarkdown>{explanationMarkdown}</ReactMarkdown>
      <fieldset className="slopes">
        {slopeList.map(([right, down, treesHit], index) => {
          return (
            <div className="slope" key={`slope-${index}`}>
              <label htmlFor="right">
                Right
                <input
                  name="right"
                  type="number"
                  step="1"
                  min="0"
                  onChange={(e) =>
                    handleSlopeListChange(index, 0, e.target.value)
                  }
                  value={right}
                />
              </label>

              <label htmlFor="down">
                Down
                <input
                  name="down"
                  type="number"
                  step="1"
                  min="0"
                  onChange={(e) =>
                    handleSlopeListChange(index, 1, e.target.value)
                  }
                  value={down}
                />
              </label>

              <label htmlFor="trees-hit">
                Trees Hit
                <input
                  name="trees-hit"
                  type="number"
                  value={treesHit}
                  disabled
                />
              </label>
            </div>
          );
        })}
        <label htmlFor="answer">
          Part 2 Answer
          <input name="answer" type="number" value={answer} disabled />
        </label>
      </fieldset>
    </>
  );
};

// export const Day2Part2 = () => {
//   const [validPasswords, setValidPasswords] = useState(false);

//   return (
//     <>
//       <p>Number of passwords that match their policies</p>
//       <p>
//         Policy: Characters must occur in specific locations, but only once per
//         password
//       </p>
//       <button onClick={() => setValidPasswords(part2(data?.policies))}>
//         Day 2 - Part 2
//       </button>
//       {validPasswords && <p>Valid Passwords: {validPasswords}</p>}
//     </>
//   );
// };
