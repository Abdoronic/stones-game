# Stones Game
An ad-hoc game, to illustrate the concept of winning and losing positions in Game Theory.

## How to play?
There are two players (A and B), and two piles of stones. First, the players choose the number of stones in each pile.

![alt text](https://i.imgur.com/S6Fh3iv.png) 

![alt text](https://i.imgur.com/EdYrHia.png) 

Player A starts, then players will swap turns. In each player's turn, they can remove a stone from the Red pile or the Blue pile or both (if possible). 

![alt text](https://i.imgur.com/Mou3WMz.png)

The player that removes the last stone wins.

![alt text](https://i.imgur.com/2Tz7UX2.png)

There is condition on the number of stones when starting the game, that is if true and both players play optimally, player A will never be able to win. Can you guess it?

## How to install and run?
* Install [Node](https://nodejs.org/en/) (if not installed before).
* Clone the repo.
* Change the working directory to where the repo. is:
```bash
cd stones-game
```
* Install the dependencies:
```bash
npm install
```
* Start the game:
```bash
npm start
```
You will find the game running on `http://localhost:3000/`.
