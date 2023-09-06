export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer id="main_app_footer">
			<p>
				&copy; <span className="dateYear">{year}</span>
			</p>
		</footer>
	);
}
