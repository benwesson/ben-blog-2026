import Image from "next/image";
import styles from "./featured.module.css";
export default function Featured() {
	return (
		<section>
			<h2>Featured Post</h2>
			<div className={styles.imageContainer}>
				<Image
					className={styles.image}
					src="/pasta.jpg"
					alt="Featured Post"
					width={1200}
					height={450}
				/>
				<div className={styles.imageText}>
					<h3>Dinner</h3>
					<h2>Pasta</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
			</div>
		</section>
	);
}
