export const parseDecks = (rawInput) => {
  const [player1Raw, player2Raw] = rawInput.split("\r\n\r\n");

  const player1 = player1Raw
    .split("\r\n")
    .filter((card) => card.indexOf("Player") === -1)
    .map((card) => parseInt(card));

  const player2 = player2Raw
    .split("\r\n")
    .filter((card) => card.indexOf("Player") === -1)
    .map((card) => parseInt(card));

  return [player1, player2];
};

export const playRound = (player1, player2) => {
  if (player1[0] > player2[0]) {
    player1.push(player1.shift(), player2.shift());
  } else {
    player2.push(player2.shift(), player1.shift());
  }

  return [player1, player2];
};

export const playGame = (player1, player2) => {
  let winner;
  let round = 0;

  while (!winner) {
    round++;
    [player1, player2] = playRound(player1, player2);

    if (player1.length === 0) {
      winner = player2;
      console.log(`Player 2 Wins - Round ${round}`);
    } else if (player2.length === 0) {
      winner = player1;
      console.log(`Player 1 Wins - Round ${round}`);
    }
  }

  return winner;
};

export const part1 = (rawInput) => {
  const [player1Deck, player2Deck] = parseDecks(rawInput);

  const winnerDeck = playGame(player1Deck, player2Deck);

  const score = winnerDeck.reduce((acc, card, index) => {
    return acc + card * (winnerDeck.length - index);
  }, 0);

  return score;
};

export const playRoundRecursiveCombat = (player1, player2, game) => {
  let winner;

  const player1Top = player1.shift();
  const player2Top = player2.shift();

  // if players top card's value is equal to or less than the amount of cards left in their deck
  if (player1Top <= player1.length && player2Top <= player2.length) {
    // play a recursive game;
    const player1RecursiveDeck = player1.slice(0, player1Top); // copy deck
    const player2RecursiveDeck = player2.slice(0, player2Top); // copy deck

    winner = playGameRecursiveCombat(
      player1RecursiveDeck,
      player2RecursiveDeck,
      game + 1
    ).winner;
  } else if (player1Top > player2Top) {
    winner = "1";
  } else {
    winner = "2";
  }

  if (winner === "1") {
    player1.push(player1Top, player2Top);
  } else {
    player2.push(player2Top, player1Top);
  }

  return [player1, player2];
};

export const playGameRecursiveCombat = (player1, player2, game) => {
  let winner;
  let round = 0;
  const previousRounds = new Set();

  while (!winner) {
    const roundKey1 = JSON.stringify(
      `${player1.join(",")}-${player2.join(",")}`
    );
    const roundKey2 = JSON.stringify(
      `${player2.join(",")}-${player1.join(",")}`
    );

    if (previousRounds.has(roundKey1) || previousRounds.has(roundKey2)) {
      winner = "1";
    } else {
      round++;
      previousRounds.add(roundKey1);
      previousRounds.add(roundKey2);

      [player1, player2] = playRoundRecursiveCombat(player1, player2, game);

      if (player1.length === 0) {
        winner = "2";
      } else if (player2.length === 0) {
        winner = "1";
      }
    }
  }

  return { winner, deck: winner === "1" ? player1 : player2 };
};

export const part2 = (rawInput) => {
  const [player1Deck, player2Deck] = parseDecks(rawInput);

  const { deck } = playGameRecursiveCombat(player1Deck, player2Deck, 1);

  const score = deck.reduce((acc, card, index) => {
    return acc + card * (deck.length - index);
  }, 0);

  return score;
};
