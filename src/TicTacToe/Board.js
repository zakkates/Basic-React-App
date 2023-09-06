import { useState } from "react";

// Square
function Square({ value, player, setPlayer, gameOver }) {
	const [val, setVal] = useState(``);

	function cellClicked(e) {
		console.log(`cellClicked: ${val} | Game Over: ${gameOver}`);
		if (gameOver) {
			console.log(`GAME IS OVER!`);
			e.preventDefault();
			return;
		}
		if (val.length > 0) {
			console.log(`Can't click a cell that has already been used!`);
			e.preventDefault();
			return;
		}
		setPlayer(value);
		setVal(player);
	}

	return (
		<div
			className="TicTacToe--Square"
			onClick={cellClicked}
			value={val}
			data-val={val}>
			{val}
		</div>
	);
}

// Board
export default function Board({ player, setPlayer, gameOver }) {
	return (
		<div
			className="TicTacToe--Board"
			id="TicTacToeBoard">
			<div className="TicTacToe--InnerBoardWrapper">
				<Square
					value="1"
					gameOver={gameOver}
					player={player}
					setPlayer={setPlayer}></Square>
				<Square
					value="2"
					gameOver={gameOver}
					player={player}
					setPlayer={setPlayer}></Square>
				<Square
					value="3"
					gameOver={gameOver}
					player={player}
					setPlayer={setPlayer}></Square>
				<Square
					value="4"
					gameOver={gameOver}
					player={player}
					setPlayer={setPlayer}></Square>
				<Square
					value="5"
					gameOver={gameOver}
					player={player}
					setPlayer={setPlayer}></Square>
				<Square
					value="6"
					gameOver={gameOver}
					player={player}
					setPlayer={setPlayer}></Square>
				<Square
					value="7"
					gameOver={gameOver}
					player={player}
					setPlayer={setPlayer}></Square>
				<Square
					value="8"
					gameOver={gameOver}
					player={player}
					setPlayer={setPlayer}></Square>
				<Square
					value="9"
					gameOver={gameOver}
					player={player}
					setPlayer={setPlayer}></Square>
			</div>
		</div>
		// end TicTacToe--Board
	);
}

// CurrentPlayer
export function CurrentPlayer({ currentPlayer }) {
	return (
		<>
			<p>
				<b>Current Player: </b>
				{currentPlayer}
			</p>
		</>
	);
}

export function GameStatus({ gameStatus }) {
	return (
		<div className="TicTacToe--GameStatus d-block mb-4">
			<span>{gameStatus}</span>
		</div>
	);
}

// MovesHistory
export function MovesHistory({ moves }) {
	return (
		<>
			<p>
				<b className="d-block">Moves History: </b>
				{moves.length == 0 && <em>No moves taken yet.</em>}
			</p>
			<ul className="TicTacToe--movesHistory">
				{moves.map((move) => {
					return (
						<li
							key={move.moveID}
							id={move.moveID}
							className={move.movePlayer}>
							{move.movePlayer}: {move.moveCell}
						</li>
					);
				})}
			</ul>
		</>
	);
}
