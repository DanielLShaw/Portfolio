import React, { useEffect, useState, useRef } from "react";
import { part1, part2 } from "../Day11/solution";
import rawInput from "./input.txt";
import rawTestInput from "./testInput.txt";

export const Visualisation = ({ input, simulation }) => {
  const [seats, setSeats] = useState([]);
  const [{ occupied, unoccupied }, setOccupied] = useState({});
  const [finished, setFinished] = useState(false);
  const [running, setRunning] = useState(false);
  const [tick, setTick] = useState("tock");

  const interval = useRef();

  const handleSimulationStep = () => {
    if (finished) {
      setSeats(input);
      setRunning(false);
      setFinished(false);
    }
    if (!running) {
      setRunning(true);
      interval.current = setInterval(() => {
        setTick((prev) => (prev === "tick" ? "tock" : "tick"));
      }, 100);
    } else {
      clearInterval(interval.current);
      setRunning(false);
    }
  };

  useEffect(() => {
    const { outputSeats, occupied, unoccupied, finished } = simulation(seats);
    setOccupied({ occupied, unoccupied });
    setSeats(outputSeats);
    if (finished) {
      clearInterval(interval.current);
      setFinished(true);
      setRunning(false);
    }
  }, [tick]);

  useEffect(() => {
    setSeats(input);
  }, []);

  return (
    <>
      <button onClick={handleSimulationStep}>
        {finished ? "Reset" : running ? "Stop" : "Start"}
      </button>
      <span>
        occupied: {occupied} unoccupied: {unoccupied} finished:
        {finished ? "Yes" : "No"}
      </span>
      <table className="seating-system">
        <tbody>
          {seats?.map((row, rowIndex) => {
            return (
              <tr key={`row-${rowIndex}`} className="seating-system__row">
                {row?.map((seat, seatIndex) => {
                  let type;
                  switch (seat) {
                    case "#":
                      type = "occupied";
                      break;
                    case "L":
                      type = "available";
                      break;
                    default:
                      type = "floor";
                      break;
                  }
                  return (
                    <td
                      key={`seat-${rowIndex}-${seatIndex}`}
                      className={`seating-system__seat ${type}`}
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export const Day11Part1 = () => {
  const inputRows = rawInput.split("\n");

  const seatConfig = inputRows.map((row) => {
    return row.trim().split("");
  });

  return <Visualisation input={seatConfig} simulation={part1} />;
};

export const Day11Part2 = () => {
  const inputRows = rawInput.split("\n");

  const seatConfig = inputRows.map((row) => {
    return row.trim().split("");
  });

  return <Visualisation input={seatConfig} simulation={part2} />;
};
