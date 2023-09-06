export default function ProductListItem({ children, obj }) {
	console.log(`product: ${obj}`, obj);
	return (
		<li
			style={{}}
			id={`product_id_${obj.id}`}>
			<b>Product Name: </b> {obj.title}
			{children ? (
				<span
					className=""
					style={{
						fontSize: "0.7em",
						textAlign: "center",
						background: "#eee",
						padding: "0.2em 0.5em",
						borderRadius: "0.2em",
						marginLeft: "0.5em",
					}}>
					{children}
				</span>
			) : null}
		</li>
	);
}
