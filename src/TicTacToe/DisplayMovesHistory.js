// MovesHistory
export default function DisplayMovesHistory({ moves }) {
	return (
		<>
			<p>
				<b className="d-block">Moves History: </b>
				{moves.length == 0 && <em>No moves taken yet.</em>}
			</p>
			<ul className="TicTacToe--movesHistory mb-4">
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
