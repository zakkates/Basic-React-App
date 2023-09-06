// React
import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from "react-router-dom";

// Styles
import "bootstrap/dist/css/bootstrap.min.css"; // Importing the Bootstrap CSS

// Page Imports

import App from "./App";
import Footer from "./Footer";
import Nav from "./Nav";
import TicTacToe from "./TicTacToe/TicTacToe";

const root = createRoot(document.getElementById("root"));
root.render(
	<>
		<StrictMode>
			<Router>
				<div id="main_app_container">
					<Nav />
					<div id="main_app_pages_container">
						<div className="innerWrapper">
							<Routes>
								<Route
									path="/"
									element={<App />}
								/>
								<Route
									path="/tictactoe"
									element={<TicTacToe />}
								/>
							</Routes>
						</div>
					</div>
					<Footer />
				</div>
			</Router>
		</StrictMode>
	</>,
);
