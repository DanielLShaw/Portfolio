export const findNextBus = (arriveAtBusStop, buses) => {
  const busWaits = buses.map((bus) => {
    const busDepartureToArrival = Math.floor(arriveAtBusStop / bus) * bus;
    const nextBusDeparture = busDepartureToArrival + bus;
    const wait = nextBusDeparture - arriveAtBusStop;

    return { busId: bus, wait };
  });

  const sortedBusWaits = busWaits.sort((a, b) => a.wait - b.wait);

  return sortedBusWaits[0];
};

export const part1 = (rawInput) => {
  const [arrivalTime, busesRaw] = rawInput.split("\n");
  const buses = busesRaw
    .split(",")
    .filter((bus) => bus != "x")
    .map((bus) => parseInt(bus));

  const { busId, wait } = findNextBus(arrivalTime, buses);
  return busId * wait;
};

// need to revisit, JS doesnt handle the huge numbers required for this question
// BigInt is the way to go when I have time.
export const findNiceBusDeparturePattern = (buses) => {
  let findingAnswer = true;
  let firstBusId = BigInt(buses.shift());
  let timestamp = firstBusId;

  while (findingAnswer && timestamp < 1000n) {
    const answer = buses.every((busId, index) => {
      let busDeparts = true;
      if (busId !== "x") {
        busDeparts = (timestamp + BigInt(index + 1)) % BigInt(busId) === 0;
      }
      return busDeparts;
    });

    if (answer) {
      findingAnswer = false;
    } else {
      timestamp += firstBusId;
    }
  }

  return timestamp;
};

export const part2 = (rawInput) => {
  const [, busesRaw] = rawInput.split("\n");
  const buses = busesRaw.split(",");

  const timestamp = findNiceBusDeparturePattern(buses);
  return timestamp;
};
