const clickedLog = () => {
	console.log("clicked");
};

const MyButton = () => {
	return <button onClick={clickedLog}>I'm a button</button>;
};

export default function MyApp() {
	return (
		<div>
			<h1>Welcome to my app</h1>
			<MyButton />
		</div>
	);
}
