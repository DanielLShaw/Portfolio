export const part1 = (seats) => {
  let outputSeats = JSON.parse(JSON.stringify(seats)); // deep copy
  let occupied = 0;
  let unoccupied = 0;

  for (var y = 0; y < seats.length; y++) {
    for (var x = 0; x < seats[0].length; x++) {
      const topLeft = seats?.[y - 1]?.[x - 1];
      const topCenter = seats?.[y - 1]?.[x];
      const topRight = seats?.[y - 1]?.[x + 1];

      const middleLeft = seats?.[y]?.[x - 1];
      const currentSeat = seats?.[y]?.[x];
      const middleRight = seats?.[y]?.[x + 1];

      const bottomLeft = seats?.[y + 1]?.[x - 1];
      const bottomCenter = seats?.[y + 1]?.[x];
      const bottomRight = seats?.[y + 1]?.[x + 1];

      const adjacentSeats = [
        topLeft,
        topCenter,
        topRight,
        middleLeft,
        middleRight,
        bottomLeft,
        bottomCenter,
        bottomRight,
      ];

      const occupiedAdjacentSeats = adjacentSeats.filter((seat) => seat === "#")
        .length;

      if (currentSeat == "L" && occupiedAdjacentSeats == 0) {
        outputSeats[y][x] = "#";
      } else if (currentSeat == "#" && occupiedAdjacentSeats >= 4) {
        outputSeats[y][x] = "L";
      }

      outputSeats[y][x] === "#" && occupied++;
      outputSeats[y][x] === "L" && unoccupied++;
    }
  }

  const finished = JSON.stringify(seats) === JSON.stringify(outputSeats);

  return { outputSeats, occupied, unoccupied, finished };
};

export const findFirstVisible = (seats, currentX, currentY, dx, dy) => {
  const inBounds = true;

  let x = currentX + dx;
  let y = currentY + dy;

  while (inBounds) {
    const target = seats?.[y]?.[x];
    if (!target) {
      return false;
    }
    if (target !== ".") {
      return target;
    }

    x += dx;
    y += dy;
  }

  return false;
};

export const part2 = (seats) => {
  let outputSeats = JSON.parse(JSON.stringify(seats)); // deep copy
  let occupied = 0;
  let unoccupied = 0;

  for (var y = 0; y < seats.length; y++) {
    for (var x = 0; x < seats[0].length; x++) {
      const topLeft = findFirstVisible(seats, x, y, -1, -1);
      const topCenter = findFirstVisible(seats, x, y, 0, -1);
      const topRight = findFirstVisible(seats, x, y, +1, -1);

      const middleLeft = findFirstVisible(seats, x, y, -1, 0);
      const currentSeat = seats?.[y]?.[x];
      const middleRight = findFirstVisible(seats, x, y, +1, 0);

      const bottomLeft = findFirstVisible(seats, x, y, -1, +1);
      const bottomCenter = findFirstVisible(seats, x, y, 0, +1);
      const bottomRight = findFirstVisible(seats, x, y, +1, +1);

      const visibleSeats = [
        topLeft,
        topCenter,
        topRight,
        middleLeft,
        middleRight,
        bottomLeft,
        bottomCenter,
        bottomRight,
      ];

      const occupiedAdjacentSeats = visibleSeats.filter((seat) => seat === "#")
        .length;

      if (currentSeat == "L" && occupiedAdjacentSeats == 0) {
        outputSeats[y][x] = "#";
      } else if (currentSeat == "#" && occupiedAdjacentSeats >= 8) {
        outputSeats[y][x] = "L";
      }

      outputSeats[y][x] === "#" && occupied++;
      outputSeats[y][x] === "L" && unoccupied++;
    }
  }

  const finished = JSON.stringify(seats) === JSON.stringify(outputSeats);

  return { outputSeats, occupied, unoccupied, finished };
};
