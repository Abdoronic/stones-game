import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import IncreaseIcon from "@material-ui/icons/ExpandLess";
import DecreaseIcon from "@material-ui/icons/ExpandMore";
import styles from "../styles/GameSetup.module.css";

export default function GameSetup({
  startRedStones,
  startBlueStones,
  changeNumber,
  startGame,
}) {
  return (
    <Card className={styles.container}>
      <Typography className={styles.header} variant="h4">
        Choose Number of Stones
      </Typography>
      <div className={styles.chooseStones}>
        <Typography color="secondary" variant="h5">
          Red Stones
        </Typography>
        <Typography color="primary" variant="h5">
          Blue Stones
        </Typography>
        <IconButton color="secondary" onClick={() => changeNumber("red", "+")}>
          <IncreaseIcon />
        </IconButton>
        <IconButton color="primary" onClick={() => changeNumber("blue", "+")}>
          <IncreaseIcon />
        </IconButton>
        <Typography className={styles.stonesCount} variant="h3">
          {startRedStones}
        </Typography>
        <Typography className={styles.stonesCount} variant="h3">
          {startBlueStones}
        </Typography>
        <IconButton color="secondary" onClick={() => changeNumber("red", "-")}>
          <DecreaseIcon />
        </IconButton>
        <IconButton color="primary" onClick={() => changeNumber("blue", "-")}>
          <DecreaseIcon />
        </IconButton>
      </div>
      <Button className={styles.startButton} onClick={startGame}>
        Start Game
      </Button>
    </Card>
  );
}
