import Board, { CurrentPlayer, GameStatus, MovesHistory } from "./Board.js";
import { useState } from "react";
import { useEffect } from "react";

export default function TicTacToe() {
	const [player, setPlayer] = useState("X");
	const [moves, setMoves] = useState([]);
	const [gameOver, setGameOver] = useState(false);
	const [gameStatus, setGameStatus] = useState(`Game in progress...`);

	// On Cell Click
	// Custom setPlayer Function
	const setPlayerExtended = (cell) => {
		console.log(
			`Cell: ${cell} | Player: ${player} || GAME STATUS: ${gameOver}`,
		);

		// Add to the move list
		setMoves([
			...moves,
			{ moveID: moves.length + 1, moveCell: cell, movePlayer: player },
		]);

		// Set the next player
		if (player == `X`) {
			setPlayer(`Y`);
		} else {
			setPlayer(`X`);
		}
	};

	// Check if TicTacToe Has Been Won or if there's Stalemate
	useEffect(() => {
		console.log(`movesLength: ${moves.length}`);
		const TicTacToeBoard = document.getElementById("TicTacToeBoard");
		const TicTacToeSquares = TicTacToeBoard.querySelectorAll(
			".TicTacToe--Square",
		);

		console.log(
			`moves has been updated. Checking if Tic Tac Toe has been won...`,
		);

		// TODO: Logic needs to be fixed. Isn't correct.
		const visited = new Set();
		const dfs = (pos, letter, count = 0) => {
			// Check if this cell has been visited already
			if (visited.has(pos)) return;
			visited.add(pos);

			console.log(
				`dfs(${pos}, ${letter}, ${count}) | Current Cell Value: ${TicTacToeSquares[pos].dataset.val}`,
			);
			// Return if not the same letter as the previous cell
			if (letter != TicTacToeSquares[pos].dataset.val) return;

			// Set Count if letter matches the previous letter
			if (letter == TicTacToeSquares[pos].dataset.val) count++;

			// Have we found 3 in a row?
			if (count == 3) {
				setGameStatus(`${letter} has won the game! `);
				setGameOver(true);
			}

			// Up
			const up = pos - 3;
			if (up >= 0) dfs(up, letter, count);

			// Down
			const down = pos + 3;
			if (down < 9) dfs(down, letter, count);

			// Left
			const left = (pos % 3) - 1;
			if (left > 0) dfs(left, letter, count);

			// Right
			const right = (pos % 3) + 1;
			if (right <= 2) dfs(right, letter, count);

			// Diagonal Tests
			if (pos == 0) {
				if (
					TicTacToeSquares[4].dataset.val == letter &&
					TicTacToeSquares[8].dataset.val == letter
				) {
					setGameStatus(`${letter} has won the game! `);
					setGameOver(true);
				}
			}
			if (pos == 2) {
				if (
					TicTacToeSquares[4].dataset.val == letter &&
					TicTacToeSquares[6].dataset.val == letter
				) {
					setGameStatus(`${letter} has won the game! `);
					setGameOver(true);
				}
			}
		};

		for (let i = 0; i < 9; i++) {
			const cellValue = TicTacToeSquares[i].dataset.val;
			if (cellValue == ``) continue;
			if (dfs(i, cellValue)) return true;
		}
		// End Game
		if (moves.length == 9) {
			setGameStatus(`Stalemate!`);
			setGameOver(true);
		}
	}, [moves]);

	return (
		<>
			<h1>TicTacToe w/ React</h1>
			<section className="TicTacToeGame">
				<CurrentPlayer currentPlayer={player} />
				<Board
					player={player}
					setPlayer={setPlayerExtended}
					gameOver={gameOver}
				/>
				<GameStatus gameStatus={gameStatus} />
				<MovesHistory moves={moves} />
			</section>
		</>
	);
}
