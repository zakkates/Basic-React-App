// React
import { useState } from "react";

// Bootstrap
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// Custom Components
import HelloWorld from "./HelloWorld";
import ProductListItem from "./ProductListItem";
import GlobalCountButton from "./GlobalCountButton";

const clickedLog = () => {
	console.log("clicked");
};

const MyButton = () => {
	return <button onClick={clickedLog}>I'm a button</button>;
};

const Task = ({ children, title }) => {
	return (
		<li className="task">
			{title} ({children})
		</li>
	);
};

const CounterButton = ({ children }) => {
	const [count, setCount] = useState(0);

	return (
		<button
			className="d-block mb-2"
			onClick={(e) => {
				console.log(`inline`);
				setCount(count + 1);
			}}>
			Click me to count: ({count})
			<span
				className="d-block"
				style={{
					fontSize: ".7em",
					fontStyle: "italic",
				}}>
				{children}
			</span>
		</button>
	);
};

const products = [
	{ title: "Cabbage", id: 1 },
	{ title: "Garlic", id: 2 },
	{ title: "Apple", id: 3 },
];

export default function App() {
	const [name, setName] = useState("");
	const [globalCount, setGlobalCount] = useState(0);

	return (
		<>
			<div className="primary-container mb-4">
				<h1>Welcome to my app</h1>
				<HelloWorld />
				<Task title="Zakery">Some Text</Task>
				<MyButton />
			</div>
			<div className="primary-container mb-4">
				{products.map((product) => {
					return (
						<ProductListItem
							obj={product}
							key={product.id}
						/>
					);
				})}
			</div>
			<div className="primary-container mb-4">
				<h2>Counter Test</h2>
				<CounterButton>Inner Text</CounterButton>
				<GlobalCountButton
					globalCount={globalCount}
					setGlobalCount={setGlobalCount}
				/>
				<GlobalCountButton
					globalCount={globalCount}
					setGlobalCount={setGlobalCount}
				/>
			</div>
			<div>
				<input
					onChange={(e) => {
						setName(e.target.value);
						console.log(`Name: ${e.target.value}`);
					}}
					className="d-block mb-4"
					type="text"
					placeholder="test"
					value={name}
					id="name"></input>
				<Button>This is a Bootstrap React Button.</Button>
			</div>
		</>
	);
}
