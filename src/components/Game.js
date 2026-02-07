import React from "react";
import useGameState from "../hooks/useGameState";
import GameSetup from "./GameSetup";
import GameBoard from "./GameBoard";
import WinnerModal from "./WinnerModal";

export default function Game() {
  const {
    startRedStones,
    startBlueStones,
    maxStones,
    redStones,
    blueStones,
    showWinner,
    roundEnded,
    currentPlayer,
    winner,
    changeNumber,
    startGame,
    removeStone,
    closeWinner,
  } = useGameState();

  return (
    <>
      <WinnerModal isOpen={showWinner} winner={winner} onClose={closeWinner} />
      {roundEnded && !showWinner ? (
        <GameSetup
          startRedStones={startRedStones}
          startBlueStones={startBlueStones}
          changeNumber={changeNumber}
          startGame={startGame}
        />
      ) : (
        <GameBoard
          redStones={redStones}
          blueStones={blueStones}
          maxStones={maxStones}
          currentPlayer={currentPlayer}
          removeStone={removeStone}
        />
      )}
    </>
  );
}
