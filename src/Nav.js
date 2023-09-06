import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";

export default function Nav() {
	return (
		<nav id="main_app_nav">
			<div className="innerWrapper">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/tictactoe">TicTacToe</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
