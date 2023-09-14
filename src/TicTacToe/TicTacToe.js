import Board from "./Board.js";
import DisplayCurrentPlayer from "./DisplayCurrentPlayer.js";
import DisplayGameStatus from "./DisplayGameStatus.js";
import DisplayMovesHistory from "./DisplayMovesHistory.js";
import { useState } from "react";
import { useEffect } from "react";

export default function TicTacToe() {
	const [player, setPlayer] = useState(`X`);
	const [moves, setMoves] = useState([]);
	const [gameOver, setGameOver] = useState(false);
	const [gameStatus, setGameStatus] = useState(`Game in progress...`);
	const [board, setBoard] = useState(new Array(9).fill(``));

	const resetBoard = () => {
		setBoard(new Array(9).fill(``));
		setPlayer(`X`);
		setMoves([]);
		setGameOver(false);
		setGameStatus(`Game in progress...`);
		console.log(`reset board button clicked`);
	};

	// On Cell Click
	// Custom setPlayer Function
	const setPlayerExtended = (cell) => {
		const newBoard = [...board];
		newBoard[cell] = player;
		setBoard(newBoard);

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
		if (moves.length !== 0) {
			const lastMove = moves[moves.length - 1];
		}
		const board = document.getElementById("TicTacToeBoard");
		const squares = board.querySelectorAll(".TicTacToe--Square");
		const values = [];
		squares.forEach((cell) => {
			values.push(cell.dataset.val);
		});

		const visited = new Set();
		const checkTicTacToeGameStatus = (pos, letter) => {
			// Check if this cell has been visited already
			if (visited.has(pos)) return;
			visited.add(pos);

			// Down
			let down = pos + 3;
			let downCount = 1;
			while (down < 9) {
				if (squares[down]?.dataset.val == letter) downCount++;
				down += 3;
			}
			if (downCount == 3) return true;

			// Right
			let right = pos + 1;
			let rightCount = 1;
			while (right % 3 != 0) {
				if (squares[right]?.dataset.val == letter) rightCount++;
				right += 1;
			}
			if (rightCount == 3) return true;

			// Diagonal Tests
			if (pos == 0) {
				if (
					squares[4].dataset.val == letter &&
					squares[8].dataset.val == letter
				) {
					return true;
				}
			}
			if (pos == 2) {
				if (
					squares[4].dataset.val == letter &&
					squares[6].dataset.val == letter
				) {
					return true;
				}
			}
		}; // checkTicTacToeGameStatus()

		for (let i = 0; i < 7; i++) {
			if (i == 4 || i == 5) continue;
			const cellValue = squares[i].dataset.val;
			if (cellValue == ``) continue;
			// console.log(`checkTicTacToeGameStatus(${i}, ${cellValue})`);
			if (checkTicTacToeGameStatus(i, cellValue)) {
				setGameStatus(`${cellValue} has won the game! `);
				setGameOver(true);
			}
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
				<DisplayCurrentPlayer currentPlayer={player} />
				<Board
					player={player}
					setPlayer={setPlayerExtended}
					gameOver={gameOver}
					board={board}
				/>
				<DisplayGameStatus gameStatus={gameStatus} />
				<DisplayMovesHistory moves={moves} />
				<ResetButton resetBoard={resetBoard} />
			</section>
		</>
	);
}

function ResetButton({ resetBoard }) {
	return <button onClick={resetBoard}>Reset</button>;
}
