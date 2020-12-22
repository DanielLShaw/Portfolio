export const getTopEdge = (tile) => {
  return tile[0];
};

export const getBottomEdge = (tile) => {
  return tile[tile.length - 1];
};

export const getLeftEdge = (tile) => {
  return tile.map((row) => row.charAt(0)).join("");
};

export const getRightEdge = (tile) => {
  return tile.map((row) => row.charAt(row.length - 1)).join("");
};

export const parseTileData = (rawInput) => {
  const rawTiles = rawInput.split("\r\n\r\n");
  const tileIdRegex = new RegExp("Tile\\s(\\d+):");

  const tileMap = new Map();
  rawTiles.forEach((rawTile) => {
    const tileRows = rawTile.split("\r\n");

    const tileIdRaw = tileRows.shift();

    const [, tileId] = tileIdRaw.match(tileIdRegex);

    const tileData = {
      tile: tileRows,
      top: getTopEdge(tileRows),
      right: getRightEdge(tileRows),
      bottom: getBottomEdge(tileRows),
      left: getLeftEdge(tileRows),
    };

    tileMap.set(parseInt(tileId), tileData);
  });

  return tileMap;
};

export const reverseString = (string) => {
  return string.split("").reverse().join("");
};

export const findMatchingEdge = (tileA, tileB) => {
  return Object.keys(tileA).find((keyA) => {
    if (keyA !== "tile") {
      return Object.keys(tileB).find((keyB) => {
        if (keyB !== "tile" && tileA !== tileB) {
          return (
            tileA[keyA] === tileB[keyB] ||
            tileA[keyA] === reverseString(tileB[keyB])
          ); // rotated || flipped
        }
      });
    }
  });
};

export const findCorners = (tileMap) => {
  const corners = [];
  tileMap.forEach((tileA, tileAId) => {
    let matchedEdges = 0;

    tileMap.forEach((tileB, tileBId) => {
      if (findMatchingEdge(tileA, tileB)) {
        matchedEdges++;
      }
    });

    if (matchedEdges === 2) {
      corners.push(tileAId);
    }
  });
  return corners;
};

export const part1 = (rawInput) => {
  const tileMap = parseTileData(rawInput);
  const corners = findCorners(tileMap);

  return corners.reduce((acc, tile) => acc * tile);
};
