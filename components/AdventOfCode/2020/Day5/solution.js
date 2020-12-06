export const convertToBinary = (code) => {
  let binary = code.replace(/[LF]/g, "0").replace(/[RB]/g, "1");
  return binary;
};

export const allocateSeat = (boardingPass) => {
  const rowCode = boardingPass.substr(0, 7);
  const columnCode = boardingPass.substr(7, 3);

  const rowBinary = convertToBinary(rowCode);
  const columnBinary = convertToBinary(columnCode);

  const rowDecimal = parseInt(rowBinary, 2);
  const colDecimal = parseInt(columnBinary, 2);

  const seatId = rowDecimal * 8 + colDecimal;

  return [
    boardingPass,
    isNaN(rowDecimal) ? false : rowDecimal,
    isNaN(colDecimal) ? false : colDecimal,
    isNaN(seatId) ? false : seatId,
  ];
};

export const part1 = (boardingPasses = []) => {
  const seats =
    boardingPasses.map((boardingPass) => allocateSeat(boardingPass)) || [];

  // high to low
  const sortedSeats = seats?.sort((a, b) => b?.[3] - a?.[3]);

  return sortedSeats?.[0];
};

export const part2 = (boardingPasses = []) => {
  const seats =
    boardingPasses.map((boardingPass) => allocateSeat(boardingPass)) || [];

  //low to hight
  const sortedSeats = seats?.sort((a, b) => a?.[3] - b?.[3]);

  const seatNextToMine = sortedSeats.find((seat, index) => {
    const previousSeat = seats?.[index - 1];
    const currentSeat = seat;

    if (previousSeat && currentSeat?.[3] !== previousSeat?.[3] + 1) {
      // the seat between these is my seat
      return true;
    }
    return false;
  });

  return seatNextToMine?.[3] - 1;
};
