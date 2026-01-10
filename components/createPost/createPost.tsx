import styles from "./createPost.module.css";
export default function CreatePost() {
	return (
		<section className={styles.container}>
			<h2>Create a New Post</h2>
			<form className={styles.form}>
				<input
					type="text"
					placeholder="Post Title"
					className={styles.input}
				/>
				<select className={styles.select}>
					<option value="">Select Category</option>
					<option value="breakfast">Breakfast</option>
					<option value="lunch">Lunch</option>
					<option value="dinner">Dinner</option>
					<option value="dessert">Dessert</option>
				</select>
				<textarea
					placeholder="Write your post content here..."
					className={styles.textarea}
				></textarea>
			</form>
		</section>
	);
}
