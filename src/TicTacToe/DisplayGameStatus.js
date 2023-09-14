export default function DisplayGameStatus({ gameStatus }) {
	return (
		<div className="TicTacToe--GameStatus d-block mb-4">
			<span>{gameStatus}</span>
		</div>
	);
}
