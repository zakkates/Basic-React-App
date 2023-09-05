export default function GlobalCountButton({ globalCount, setGlobalCount }) {
	return (
		<button
			className="d-block mb-2"
			onClick={(e) => {
				setGlobalCount(globalCount + 1);
			}}>
			Click here to increment the Global Counter: ({globalCount})
		</button>
	);
}
