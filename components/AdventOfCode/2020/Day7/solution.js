import { combineObjects } from "../../../../lib/objectUtils";

export const bagParser = (bag) => {
  const bagRegex = new RegExp("^([\\w\\s]+)\\sbags\\scontain");
  const containedBagsRegex = new RegExp(
    "(\\d+)\\s([\\s\\w]+)\\sbags*[,\\.]",
    "g"
  );

  const bagColourMatch = bag?.match(bagRegex);
  const bagColour = bagColourMatch?.[1]?.replace(" ", "_");

  const containedBagsMatches = [...bag?.matchAll(containedBagsRegex)];

  const containedBags = containedBagsMatches.map((match) => {
    const [, number, colour] = match;
    const formattedColour = colour?.replace(" ", "_");
    return { colour: formattedColour, quantity: parseInt(number) };
  });

  return [bagColour, containedBags];
};

// bags that contain targetColour
export const parentBags = (bagKey, targetColour) => {
  let foundBags = [];

  Object.keys(bagKey).forEach((colour) => {
    if (
      bagKey?.[colour]?.some((bag) => {
        return bag.colour === targetColour;
      })
    ) {
      foundBags = [...foundBags, colour, ...parentBags(bagKey, colour)];
    }
  });

  return [...new Set(foundBags)];
};

export const part1 = (bagRules) => {
  let bagKey = {};

  bagRules.forEach((bag) => {
    const [colour, bags] = bagParser(bag);
    bagKey[colour] = bags;
  });

  const bagsContainingShinyGold = parentBags(bagKey, "shiny_gold");

  return bagsContainingShinyGold?.length;
};

// bags that are contained by targetColour
export const childBags = (bagKey, targetColour) => {
  let foundBags = {};

  const targetBags = bagKey?.[targetColour];

  targetBags.forEach(({ colour, quantity }) => {
    const childBagsForColour = childBags(bagKey, colour);
    const objectsToCombine = [foundBags, { [colour]: quantity }];

    for (var i = 0; i < quantity; i++) {
      objectsToCombine.push(childBagsForColour);
    }

    foundBags = combineObjects(objectsToCombine);
  });

  return foundBags;
};

export const part2 = (bagRules) => {
  let bagKey = {};

  bagRules.forEach((bag) => {
    const [colour, bags] = bagParser(bag);
    bagKey[colour] = bags;
  });

  const bagsContainedInShinyGold = childBags(bagKey, "shiny_gold");

  return Object.values(bagsContainedInShinyGold).reduce(
    (acc, add) => acc + add
  );
};
