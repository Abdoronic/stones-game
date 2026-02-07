import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/StonePile.module.css";

const STONE_SIZE = 30;

export default function StonePile({ stonesCount, maxStones, color }) {
  const generatedStones = [];
  let height = STONE_SIZE;
  let width = height * 2;
  let borderRadius = `${height}px / ${width / 4}px`;
  let background = "white";
  const maxWidth = width * Math.pow(1.1, maxStones - 1);

  for (let i = 0; i < maxStones; i++) {
    if (maxStones - i === stonesCount) {
      background = color === "red" ? "#f50057" : "#3f51b5";
    }
    generatedStones.push(
      <div
        key={i}
        style={{ display: "grid", width: maxWidth, justifyContent: "center" }}
      >
        <div
          style={{
            width,
            height,
            borderRadius,
            background,
            boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.16)",
          }}
        />
      </div>
    );
    width *= 1.1;
    height *= 1.1;
    borderRadius = `${height}px / ${width / 4}px`;
  }

  return (
    <div className={styles.bucket}>
      <div className={styles.pile}>{generatedStones}</div>
      <br />
      <Typography color="textSecondary">Remaining: {stonesCount}</Typography>
    </div>
  );
}
