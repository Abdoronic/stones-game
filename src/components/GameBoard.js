import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StonePile from "./StonePile";
import styles from "../styles/GameBoard.module.css";

export default function GameBoard({
  redStones,
  blueStones,
  maxStones,
  currentPlayer,
  removeStone,
}) {
  const cantRed = redStones < 1;
  const cantBlue = blueStones < 1;
  const cantBoth = redStones < 1 || blueStones < 1;

  return (
    <Card className={styles.container}>
      <Typography
        variant="h5"
        color="textSecondary"
        className={styles.playerTurn}
      >
        Player {currentPlayer}'s turn
      </Typography>
      <div className={styles.stonesArea}>
        <Typography variant="h3">Red Pile</Typography>
        <Typography variant="h3">Blue Pile</Typography>
        <StonePile stonesCount={redStones} maxStones={maxStones} color="red" />
        <StonePile
          stonesCount={blueStones}
          maxStones={maxStones}
          color="blue"
        />
      </div>
      <div className={styles.actionsArea}>
        <Button
          variant="contained"
          color="secondary"
          disabled={cantRed}
          onClick={() => removeStone(true, false)}
        >
          Remove from red
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={cantBlue}
          onClick={() => removeStone(false, true)}
        >
          Remove from blue
        </Button>
        <Button
          variant="contained"
          disabled={cantBoth}
          className={styles.bothButton}
          onClick={() => removeStone(true, true)}
        >
          Remove from both
        </Button>
      </div>
    </Card>
  );
}
