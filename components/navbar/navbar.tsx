import Link from "next/link";
import styles from "./navbar.module.css";
export default function Navbar() {
	return (
		<nav>
			<h1 className={styles.title}>{"Ben's Eats"}</h1>
			<div className={styles.container}>
				<Link href="/">Home</Link>
				<Link href="/post">Post</Link>
				<Link href="/post">Breakfast</Link>
				<Link href="/post">Lunch</Link>
				<Link href="/post">Dinner</Link>
				<Link href="/post">Dessert</Link>
				<Link href="/post">Saved</Link>
				<Link href="/login">Login</Link>
			</div>
		</nav>
	);
}