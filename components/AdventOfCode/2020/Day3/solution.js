import { rawToList } from "../../../../lib/rawFileUtils";

export const part1 = (input) => {
  const terrain2d = rawToList(input);
  const slopeWidth = terrain2d?.[0]?.length;

  let tobogganIndex = 0;
  let treesHit = 0;

  terrain2d.forEach((level) => {
    const terrainType = level.charAt(tobogganIndex);
    const treeHit = terrainType === "#";

    if (treeHit) treesHit++;

    // move right 3, and check that the toboggan hasn't gone into the next vertical slope.
    tobogganIndex += 3;
    if (tobogganIndex > slopeWidth - 1) {
      tobogganIndex = tobogganIndex % slopeWidth;
    }
  });
  return treesHit;
};

export const part1Modified = (input, right, down) => {
  const terrain2d = rawToList(input);
  const slopeHeight = terrain2d?.length;
  const slopeWidth = terrain2d?.[0]?.length;

  let tobogganIndex = 0;
  let treesHit = 0;

  for (
    var distanceFromTop = 0;
    distanceFromTop < slopeHeight;
    distanceFromTop += down // move down the slope at different rates
  ) {
    const terrainType = terrain2d?.[distanceFromTop]?.charAt(tobogganIndex);
    const treeHit = terrainType === "#";
    if (treeHit) treesHit++;
    tobogganIndex += right;
    if (tobogganIndex > slopeWidth - 1) {
      tobogganIndex = tobogganIndex % slopeWidth;
    }
  }

  return treesHit;
};

export const part2 = (input, slopeLists) => {
  const treesHitList = slopeLists.map(([right, down]) => {
    return part1Modified(input, right, down);
  });

  return {
    treesHitList,
    answer: treesHitList?.reduce((total, next) => total * next),
  };
};
