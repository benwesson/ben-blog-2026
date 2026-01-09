import Link from "next/link";

export default function Navbar() {
	return (
		<nav>
			<h1>{"Ben's Eats"}</h1>
			<div>
				<Link href="/">Home</Link>
				<Link href="/">Recipes</Link>
				<Link href="/post">Post</Link>
				<Link href="/">Login</Link>
			</div>
		</nav>
	);
}