import { useState } from "react";

const DEFAULT_STONES = 12;

export default function useGameState() {
  const [startRedStones, setStartRedStones] = useState(DEFAULT_STONES);
  const [startBlueStones, setStartBlueStones] = useState(DEFAULT_STONES);
  const [maxStones, setMaxStones] = useState(1);
  const [redStones, setRedStones] = useState(0);
  const [blueStones, setBlueStones] = useState(0);
  const [showWinner, setShowWinner] = useState(false);
  const [turn, setTurn] = useState(false);

  const roundEnded = redStones === 0 && blueStones === 0;
  const currentPlayer = turn ? "B" : "A";
  const winner = turn ? "A" : "B";

  function changeNumber(color, action) {
    const delta = action === "+" ? 1 : -1;
    if (color === "red") {
      setStartRedStones((prev) => Math.max(prev + delta, 1));
    } else {
      setStartBlueStones((prev) => Math.max(prev + delta, 1));
    }
  }

  function startGame() {
    setRedStones(startRedStones);
    setBlueStones(startBlueStones);
    setMaxStones(Math.max(startRedStones, startBlueStones));
    setTurn(false);
  }

  function removeStone(red, blue) {
    const newRed = red ? redStones - 1 : redStones;
    const newBlue = blue ? blueStones - 1 : blueStones;

    setRedStones(newRed);
    setBlueStones(newBlue);
    setTurn((prev) => !prev);

    if (newRed === 0 && newBlue === 0) {
      setShowWinner(true);
    }
  }

  function closeWinner() {
    setShowWinner(false);
  }

  return {
    startRedStones,
    startBlueStones,
    maxStones,
    redStones,
    blueStones,
    showWinner,
    turn,
    roundEnded,
    currentPlayer,
    winner,
    changeNumber,
    startGame,
    removeStone,
    closeWinner,
  };
}
