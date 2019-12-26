import React, { Component } from "react";
import Modal from "react-modal";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { IconButton } from "@material-ui/core";
import IncreaseIcon from "@material-ui/icons/ExpandLess";
import DecreaseIcon from "@material-ui/icons/ExpandMore";

class Game extends Component {
  state = {
    startRedStones: 8,
    startBlueStones: 8,
    maxStones: 1,
    redStones: 0,
    blueStones: 0,
    showWinner: false,
    turn: false,
    stoneSize: 30
  };

  startGame() {
    this.setState({
      redStones: this.state.startRedStones,
      blueStones: this.state.startBlueStones,
      maxStones: Math.max(
        this.state.startRedStones,
        this.state.startBlueStones
      ),
      turn: false
    });
  }

  changeNumber(color, action) {
    if (color === "red")
      this.setState({
        startRedStones: Math.max(
          this.state.startRedStones + (action === "+" ? 1 : -1),
          1
        )
      });
    else
      this.setState({
        startBlueStones: Math.max(
          this.state.startBlueStones + (action === "+" ? 1 : -1),
          1
        )
      });
  }

  createNewRound() {
    return (
      <Card style={styles.startUpContainer}>
        <Typography style={styles.startUpHeader} variant="h4">
          {" "}
          Choose Number of Stones{" "}
        </Typography>
        <div style={styles.chooseStones}>
          <Typography color="secondary" variant="h5">
            {" "}
            Red Stones{" "}
          </Typography>
          <Typography color="primary" variant="h5">
            {" "}
            Blue Stones{" "}
          </Typography>
          <IconButton
            color="secondary"
            onClick={ev => this.changeNumber("red", "+")}
          >
            <IncreaseIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={ev => this.changeNumber("blue", "+")}
          >
            <IncreaseIcon />
          </IconButton>
          <Typography style={styles.startStonesCount} variant="h3">
            {this.state.startRedStones}
          </Typography>
          <Typography style={styles.startStonesCount} variant="h3">
            {this.state.startBlueStones}
          </Typography>
          <IconButton
            color="secondary"
            onClick={ev => this.changeNumber("red", "-")}
          >
            <DecreaseIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={ev => this.changeNumber("blue", "-")}
          >
            <DecreaseIcon />
          </IconButton>
        </div>
        <Button style={styles.startButton} onClick={ev => this.startGame()}>
          Start Game
        </Button>
      </Card>
    );
  }

  async removeStone(red, blue) {
    const { redStones, blueStones } = this.state;
    if (red) await this.setState({ redStones: redStones - 1 });
    if (blue) await this.setState({ blueStones: blueStones - 1 });
    this.setState({ turn: !this.state.turn });
    if (this.state.redStones === 0 && this.state.blueStones === 0)
      this.setState({ showWinner: true });
  }

  generatePile(stonesCount, maxStones, color) {
    let generatedStones = [];
    let height = this.state.stoneSize;
    let width = height * 2;
    let borderRadius = `${height}px / ${width / 4}px`;
    let background = "white";
    let maxWidth = width * Math.pow(1.1, maxStones - 1);
    for (let i = 0; i < maxStones; i++) {
      if (maxStones - i === stonesCount)
        background = color === "red" ? "#f50057" : "#3f51b5";
      let stone = (
        <div
          style={{ display: "grid", width: maxWidth, justifyContent: "center" }}
        >
          <div key={i} style={{ width, height, borderRadius, background, boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.16)" }} />
        </div>
      );
      generatedStones.push(stone);
      width *= 1.1;
      height *= 1.1;
      borderRadius = `${height}px / ${width / 4}px`;
    }
    return (
      <div style={styles.bucket}>
        <div style={styles.pile}>{generatedStones}</div>
        <br />
        <Typography color="textSecondary">Remaining: {stonesCount}</Typography>
      </div>
    );
  }

  viewRound(redStones, blueStones) {
    const cantRed = redStones < 1;
    const cantBlue = blueStones < 1;
    const cantBoth = redStones < 1 || blueStones < 1;
    return (
      <Card style={styles.container}>
        <Typography
          variant="h5"
          color="textSecondary"
          style={styles.playerTurn}
        >
          {" "}
          {this.state.turn ? "Player B's turn" : "Player A's turn"}{" "}
        </Typography>
        <div style={styles.stonesArea}>
          <Typography variant="h3"> Red Pile </Typography>
          <Typography variant="h3"> Blue Pile </Typography>
          {this.generatePile(redStones, this.state.maxStones, "red")}
          {this.generatePile(blueStones, this.state.maxStones, "blue")}
        </div>
        <div style={styles.actionsArea}>
          <Button
            variant="contained"
            color="secondary"
            disabled={cantRed}
            style={styles.redButton}
            onClick={ev => this.removeStone(true, false)}
          >
            {" "}
            Remove from red{" "}
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={cantBlue}
            style={styles.blueButton}
            onClick={ev => this.removeStone(false, true)}
          >
            {" "}
            Remove from blue{" "}
          </Button>
          <Button
            variant="contained"
            disabled={cantBoth}
            style={styles.bothButton}
            onClick={ev => this.removeStone(true, true)}
          >
            {" "}
            Remove from both{" "}
          </Button>
        </div>
      </Card>
    );
  }

  showWinnerModal() {
    return (
      <Modal
        key="modal0"
        isOpen={this.state.showWinner}
        onRequestClose={() => this.setState({ showWinner: false })}
        style={styles.modalStyle}
      >
        {`Player ${this.state.turn ? "A" : "B"} Won!`}
      </Modal>
    );
  }

  render() {
    let roundEnded = this.state.redStones === 0 && this.state.blueStones === 0;
    return [
      this.showWinnerModal(),
      roundEnded && !this.state.showWinner
        ? this.createNewRound()
        : this.viewRound(this.state.redStones, this.state.blueStones)
    ];
  }
}

const styles = {
  startUpContainer: {
    minWidth: 275,
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: "5%",
    borderRadius: "12px",
    boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.16)"
  },
  startUpHeader: {
    marginTop: "3%",
    marginBottom: "5%",
    display: "flow",
    justifyContent: "center",
    textAlign: "center"
  },
  chooseStones: {
    display: "grid",
    margin: "5%",
    gridColumnGap: "100px",
    gridRowGap: "5%",
    gridTemplateColumns: "auto auto",
    justifyContent: "center"
  },
  startStonesCount: {
    textAlign: "center"
  },
  startButton: {
    marginLeft: "40%",
    marginRight: "40%",
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: "1000px",
    fontSize: "18px"
  },
  container: {
    minWidth: 275,
    margin: "3%"
  },
  playerTurn: {
    marginTop: "3%",
    marginBottom: "5%",
    display: "flow",
    justifyContent: "center",
    textAlign: "center"
  },
  stonesArea: {
    display: "grid",
    margin: "5%",
    gridColumnGap: "40%",
    gridRowGap: "50px",
    gridTemplateColumns: "auto auto",
    justifyContent: "center"
  },
  actionsArea: {
    margin: "2%",
    display: "grid",
    gridColumnGap: "25px",
    gridRowGap: "20px",
    gridTemplateColumns: "auto auto",
    justifyContent: "center"
  },
  redButton: {},
  blueButton: {},
  bothButton: {
    gridColumn: "1 / span 2"
  },
  modalStyle: {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      fontSize: "50px",
      color: "green"
    }
  },
  bucket: {},
  pile: {
    margin: "2%",
    display: "grid",
    gridTemplateColumns: "auto",
    justifyContent: "center"
  }
};

export default Game;
