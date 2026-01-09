import Image from "next/image";
import styles from "./categories.module.css";
export default function Categories() {
	return (
		<section>
			<h2>Categories</h2>
			<div className={styles.container}>
				<div>
					<Image
						src="/breakfast.jpg"
						alt="Breakfast"
						width={350}
						height={200}
					/>
					<div>
						<h3>Breakfast</h3>
					</div>
				</div>

				<div>
					<Image
						src="/breakfast.jpg"
						alt="Breakfast"
						width={350}
						height={250}
					/>
					<div>
						<h3>Breakfast</h3>
					</div>
				</div>

				<div>
					<Image
						src="/breakfast.jpg"
						alt="Breakfast"
						width={400}
						height={250}
					/>
					<div>
						<h3>Breakfast</h3>
					</div>
				</div>

				<div>
					<Image
						src="/breakfast.jpg"
						alt="Breakfast"
						width={400}
						height={250}
					/>
					<div>
						<h3>Breakfast</h3>
					</div>
				</div>
			</div>
		</section>
	);
}
