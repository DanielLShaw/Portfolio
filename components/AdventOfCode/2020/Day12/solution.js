const compass = ["N", "E", "S", "W"];

export const getDirection = (
  currentAngle,
  rotationAngle,
  rotationDirection
) => {
  const rotationModifier = rotationDirection === "L" ? -1 : 1;

  let newFacingAngle = currentAngle + rotationModifier * rotationAngle;

  if (newFacingAngle < 0) {
    newFacingAngle = 360 - Math.abs(newFacingAngle % 360);
  } else if (newFacingAngle >= 360) {
    newFacingAngle = newFacingAngle % 360;
  }
  return newFacingAngle;
};

export const executeDirection = (action, value, x, y, currentRotation) => {
  // Action N means to move north by the given value.
  // Action S means to move south by the given value.
  // Action E means to move east by the given value.
  // Action W means to move west by the given value.
  // Action L means to turn left the given number of degrees.
  // Action R means to turn right the given number of degrees.
  // Action F means to move forward by the given value in the direction the ship is currently facing.

  const intValue = parseInt(value);

  if (action === "F") {
    const compassIndex = Math.floor(currentRotation / 90);
    action = compass[compassIndex];
  }

  switch (action) {
    case "N":
      y += intValue;
      break;
    case "S":
      y -= intValue;
      break;
    case "E":
      x += intValue;
      break;
    case "W":
      x -= intValue;
      break;
    case "L":
      currentRotation = getDirection(currentRotation, intValue, action);
      break;
    case "R":
      currentRotation = getDirection(currentRotation, intValue, action);
      break;
    default:
      break;
  }
  return [x, y, currentRotation];
};

export const pilotFerry = (directionList) => {
  const directionRegex = /(\w)(\d+)/;

  let currentRotation = 90;
  let x = 0;
  let y = 0;

  for (var i = 0; i < directionList.length; i++) {
    const [, action, value] = directionList?.[i]?.match(directionRegex);
    const [updatedX, updatedY, updatedFacing] = executeDirection(
      action,
      value,
      x,
      y,
      currentRotation
    );
    x = updatedX;
    y = updatedY;
    currentRotation = updatedFacing;
  }
  return [x, y];
};

export const part1 = (rawInput) => {
  const input = rawInput.trim().split("\n");
  const [x, y] = pilotFerry(input);

  // manhattan distance

  return Math.abs(x) + Math.abs(y);
};

export const rotateCoords = (coords, angle) => {
  const output = { ...coords };

  const radians = angle * (Math.PI / 180);

  output.x = Math.round(
    coords.x * Math.cos(radians) - coords.y * Math.sin(radians)
  );
  output.y = Math.round(
    coords.y * Math.cos(radians) + coords.x * Math.sin(radians)
  );

  return output;
};

export const executeDirectionPart2 = (
  action,
  value,
  ferryCoords,
  waypointCoords
) => {
  // Action N means to move the waypoint north by the given value.
  // Action S means to move the waypoint south by the given value.
  // Action E means to move the waypoint east by the given value.
  // Action W means to move the waypoint west by the given value.
  // Action L means to rotate the waypoint around the ship left (counter-clockwise) the given number of degrees.
  // Action R means to rotate the waypoint around the ship right (clockwise) the given number of degrees.
  // Action F means to move forward to the waypoint a number of times equal to the given value.
  const intValue = parseInt(value);

  switch (action) {
    case "N":
      waypointCoords.y += intValue;
      break;
    case "S":
      waypointCoords.y -= intValue;
      break;
    case "E":
      waypointCoords.x += intValue;
      break;
    case "W":
      waypointCoords.x -= intValue;
      break;
    case "L":
      waypointCoords = rotateCoords(waypointCoords, intValue);
      break;
    case "R":
      waypointCoords = rotateCoords(waypointCoords, -intValue);
      break;
    case "F":
      ferryCoords.x += waypointCoords.x * intValue;
      ferryCoords.y += waypointCoords.y * intValue;
      break;
    default:
      break;
  }
  return [ferryCoords, waypointCoords];
};

export const pilotFerryPart2 = (directionList) => {
  const directionRegex = /(\w)(\d+)/;

  let ferryCoords = { x: 0, y: 0 };
  let waypointCoords = { x: 10, y: 1 };

  for (var i = 0; i < directionList.length; i++) {
    const [, action, value] = directionList?.[i]?.match(directionRegex);
    const [updatedFerryCoords, updatedWaypointCoords] = executeDirectionPart2(
      action,
      value,
      ferryCoords,
      waypointCoords
    );
    ferryCoords = updatedFerryCoords;
    waypointCoords = updatedWaypointCoords;
  }
  return ferryCoords;
};

export const part2 = (rawInput) => {
  const input = rawInput.trim().split("\n");
  const { x, y } = pilotFerryPart2(input);

  // manhattan distance

  return Math.abs(x) + Math.abs(y);
};
