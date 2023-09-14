import { useState } from "react";

// Square
function Square({ board, id, player, setPlayer, gameOver }) {
	const cellValue = board[id];

	function cellClicked(e) {
		console.log(id);
		if (gameOver) {
			e.preventDefault();
			return;
		}
		if (cellValue.length > 0) {
			e.preventDefault();
			return;
		}
		setPlayer(id);
	}

	return (
		<div
			className="TicTacToe--Square"
			onClick={cellClicked}
			data-val={cellValue}>
			{cellValue}
		</div>
	);
}

// Board
export default function Board({ board, player, setPlayer, gameOver }) {
	return (
		<div
			className="TicTacToe--Board"
			id="TicTacToeBoard">
			<div className="TicTacToe--InnerBoardWrapper">
				{board.map((square, index) => {
					return (
						<Square
							key={index}
							id={index}
							board={board}
							gameOver={gameOver}
							player={player}
							setPlayer={() => setPlayer(index)}></Square>
					);
				})}
			</div>
		</div>
		// end TicTacToe--Board
	);
}
