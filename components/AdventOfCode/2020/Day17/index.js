import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";

import inputRaw from "./input.txt";
import { findCubeBoundaries, stepCubes } from "./solution";

const ConwayCube = ({ position, active, boundaries, time = 0 }) => {
  const mesh = useRef();

  const [x, y, z] = position;

  useFrame(({ camera }) => {
    camera.position.x = boundaries.maxX + 5;
    camera.position.y = boundaries.maxY + 5;
    camera.position.z = boundaries.maxZ + 5;

    camera.lookAt(boundaries.minX, boundaries.minY, boundaries.minZ);
  });

  if (!active) return null;

  return (
    <mesh position={[x, y, z]} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};
export const Day17 = () => {
  const [conwayCubes, setConwayCubes] = useState(new Map());
  const [activeCubes, setActiveCubes] = useState(0);
  const [boundaries, setBoundaries] = useState({
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    minW: 0,
    maxW: 0,
  });
  const [stepsTaken, setStepsTaken] = useState(0);
  const [fourD, setFourD] = useState(false);

  const [time, setTime] = useState(0);

  useEffect(() => {
    handleReset();
  }, [fourD]);

  const handleReset = () => {
    const input = inputRaw.split("\n");
    const initialConwayCubes = new Map();
    let initialActive = 0;
    input.forEach((line, y) => {
      line.split("").forEach((cube, x) => {
        let active;
        switch (cube) {
          case ".":
            active = false;
            break;
          case "#":
            initialActive++;
            active = true;
            break;
          default:
            active = false;
            break;
        }

        initialConwayCubes.set(JSON.stringify([x, y, 0, 0]), active);
      });
    });
    setConwayCubes(initialConwayCubes);
    setActiveCubes(initialActive);
    setBoundaries(findCubeBoundaries(conwayCubes, fourD));
    setStepsTaken(0);
  };

  const handleStepTime = () => {
    let newTime;
    if (time >= boundaries.maxW) {
      newTime = boundaries.minW;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  const stepSimulation = () => {
    const [updatedCubes, currentActive, boundaries] = stepCubes(
      conwayCubes,
      fourD
    );

    setConwayCubes(updatedCubes);
    setActiveCubes(currentActive);
    setBoundaries(boundaries);
    setStepsTaken(stepsTaken + 1);
  };

  const RenderedCubes = () => {
    const cubes = [];
    {
      conwayCubes.forEach((value, key) => {
        if (JSON.parse(key)[3] === time) {
          cubes.push(
            <ConwayCube
              key={key}
              position={JSON.parse(key)}
              active={value}
              boundaries={boundaries}
              time={time}
            />
          );
        }
      });
    }
    return cubes;
  };

  return (
    <div>
      <p>
        Find the amount of Conway Cubes that are active after 6 steps - 3d
        (part1) / 4d (part2)
      </p>
      <button onClick={stepSimulation}>Step Simulation</button>
      {fourD && <button onClick={handleStepTime}>Step Time</button>}
      <button onClick={handleReset}>Reset</button>
      <label>
        4d:
        <input
          type="checkbox"
          value={fourD}
          onChange={() => setFourD(!fourD)}
        ></input>
      </label>

      <p>Current Step: {stepsTaken}</p>
      <p>Current Active Cubes: {activeCubes}</p>
      {fourD && <p>Current Time: {time}</p>}
      <div className="canvas__container">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <RenderedCubes />
        </Canvas>
      </div>
    </div>
  );
};
