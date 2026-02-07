# Stones Game

An interactive web-based game that illustrates the concept of **winning and losing positions** in [Game Theory](https://en.wikipedia.org/wiki/Game_theory). Built with React and Material-UI.

## Table of Contents

- [About the Game](#about-the-game)
- [Game Rules](#game-rules)
- [The Game Theory Puzzle](#the-game-theory-puzzle)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Game](#running-the-game)
  - [Building for Production](#building-for-production)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [License](#license)

## About the Game

Stones Game is a two-player combinatorial game designed to teach fundamental Game Theory concepts through hands-on play. Players take turns removing stones from two colored piles, and the player who takes the last stone wins. While the rules are simple, the game reveals deep strategic patterns — certain starting configurations guarantee that one player will always lose if the opponent plays optimally.

## Game Rules

1. **Setup:** Two players (Player A and Player B) choose the number of stones in each of two piles — a **Red** pile and a **Blue** pile.
2. **Turns:** Player A goes first. Players alternate turns.
3. **Moves:** On each turn, a player must do exactly one of the following:
   - Remove **1 stone** from the Red pile
   - Remove **1 stone** from the Blue pile
   - Remove **1 stone from each** pile (2 stones total)
4. **Winning:** The player who removes the **last stone(s)** wins.

## The Game Theory Puzzle

There is a condition on the number of stones when starting the game — if it holds true and both players play optimally, **Player A will never be able to win**. Can you figure out what it is?

<details>
<summary>Hint</summary>

Think about what happens when both piles have the same number of stones. Whatever move Player A makes, Player B can mirror it to maintain symmetry.

</details>

## Screenshots

| Setup Screen | Gameplay |
|:---:|:---:|
| ![Setup](https://i.imgur.com/S6Fh3iv.png) | ![Gameplay](https://i.imgur.com/Mou3WMz.png) |

| Adjusting Piles | Winner |
|:---:|:---:|
| ![Adjusting](https://i.imgur.com/EdYrHia.png) | ![Winner](https://i.imgur.com/2Tz7UX2.png) |

## Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://reactjs.org/) | UI framework |
| [Material-UI](https://material-ui.com/) | Component library (buttons, cards, typography) |
| [react-modal](https://github.com/reactjs/react-modal) | Winner announcement dialog |
| [Create React App](https://create-react-app.dev/) | Build tooling and development server |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v10 or later recommended)
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdoronic/stones-game.git
cd stones-game

# Install dependencies
npm install
```

### Running the Game

```bash
npm start
```

The game will open in your browser at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory, ready for deployment to any static hosting service.

## Running Tests

```bash
npm test
```

This launches the test runner in interactive watch mode using [Jest](https://jestjs.io/) (provided by Create React App).

## Project Structure

```
stones-game/
├── public/
│   ├── index.html          # HTML entry point
│   ├── manifest.json       # PWA manifest
│   └── stoneIcon.png       # App icon
├── src/
│   ├── App.js              # Root component
│   ├── App.css             # App-level styles
│   ├── App.test.js         # Smoke test
│   ├── Game.js             # Core game logic and UI
│   ├── index.js            # React DOM entry point
│   ├── index.css           # Global styles
│   └── serviceWorker.js    # PWA service worker (disabled)
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── package.json
├── LICENSE
└── README.md
```

The main game logic lives in `src/Game.js`, which handles:
- Stone pile configuration and rendering
- Turn management between Player A and Player B
- Move validation (remove from red, blue, or both)
- Win condition detection
- Visual stone pile representation with color-coded styling

## License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2019 Abdulrahman Muhammad
