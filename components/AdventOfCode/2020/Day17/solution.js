import { arrayEquals } from "../../../../lib/objectUtils";

export const isActive = (activeNeighbours, active) => {
  // If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. Otherwise, the cube becomes inactive.
  // If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. Otherwise, the cube remains inactive.
  return (
    (active && (activeNeighbours === 2 || activeNeighbours === 3)) ||
    (!active && activeNeighbours === 3)
  );
};

export const findNeighbours = (coords, cubeMap, fourD) => {
  const [x, y, z, w] = coords;
  let activeNeighbours = 0;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      for (let dz = -1; dz <= 1; dz++) {
        if (fourD) {
          for (let dw = -1; dw <= +1; dw++) {
            const neighbourKey = [x + dx, y + dy, z + dz, w + dw];
            if (!arrayEquals(neighbourKey, coords)) {
              const neighbour = cubeMap.has(JSON.stringify(neighbourKey));
              if (neighbour) {
                const neighbourState = cubeMap.get(
                  JSON.stringify(neighbourKey)
                );
                if (neighbourState) {
                  activeNeighbours++;
                }
              }
            }
          }
        } else {
          const neighbourKey = [x + dx, y + dy, z + dz, 0];
          if (!arrayEquals(neighbourKey, coords)) {
            const neighbour = cubeMap.has(JSON.stringify(neighbourKey));
            if (neighbour) {
              const neighbourState = cubeMap.get(JSON.stringify(neighbourKey));
              if (neighbourState) {
                activeNeighbours++;
              }
            }
          }
        }
      }
    }
  }
  return activeNeighbours;
};

export const findCubeBoundaries = (cubeMap) => {
  let boundaries = {
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    minW: 0,
    maxW: 0,
  };
  cubeMap.forEach((value, key) => {
    const [x = 0, y = 0, z = 0, w = 0] = JSON.parse(key);
    if (boundaries.minX > x) {
      boundaries.minX = x;
    } else if (boundaries.maxX < x) {
      boundaries.maxX = x;
    }

    if (boundaries.minY > y) {
      boundaries.minY = y;
    } else if (boundaries.maxY < y) {
      boundaries.maxY = y;
    }

    if (boundaries.minZ > z) {
      boundaries.minZ = z;
    } else if (boundaries.maxZ < z) {
      boundaries.maxZ = z;
    }

    if (boundaries.minW > w) {
      boundaries.minW = w;
    } else if (boundaries.maxW < w) {
      boundaries.maxW = w;
    }
  });

  return boundaries;
};

export const padCube = (cubeMap, boundaries, fourD) => {
  const { minX, maxX, minY, maxY, minZ, maxZ, minW, maxW } = boundaries;

  for (let dx = minX - 1; dx <= maxX + 1; dx++) {
    for (let dy = minY - 1; dy <= maxY + 1; dy++) {
      for (let dz = minZ - 1; dz <= maxZ + 1; dz++) {
        if (fourD) {
          for (let dw = minW - 1; dw <= maxW + 1; dw++) {
            const coord = JSON.stringify([dx, dy, dz, dw]);
            if (!cubeMap.has(coord)) {
              cubeMap.set(coord, false);
            }
          }
        } else {
          const coord = JSON.stringify([dx, dy, dz, 0]);
          if (!cubeMap.has(coord)) {
            cubeMap.set(coord, false);
          }
        }
      }
    }
  }
  return cubeMap;
};

export const stepCubes = (cubeMap, fourD) => {
  const outputMap = new Map();

  const boundaries = findCubeBoundaries(cubeMap);

  const paddedCube = padCube(cubeMap, boundaries, fourD);

  let activeCount = 0;

  paddedCube.forEach((value, key) => {
    const activeNeighbours = findNeighbours(JSON.parse(key), cubeMap, fourD);

    const active = isActive(activeNeighbours, value);
    if (active) activeCount++;
    outputMap.set(key, active);
  });

  return [outputMap, activeCount, boundaries];
};
