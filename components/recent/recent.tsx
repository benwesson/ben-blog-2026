import { getPosts } from "../../actions/getPosts";
import Image from "next/image";
import styles from "./recent.module.css";
export default async function Recent() {
	const posts = await getPosts();

	return (
		<section>
			<h2>Recent Posts</h2>
			<div>
				{posts.map((post) => (
					<div key={post.id}>
						<Image
							className={styles.image}
							src="/pasta.jpg"
							alt="Featured Post"
							width={500}
							height={450}
						/>
						<h3>{post.title}</h3>
						<h4>{post.authorId}</h4>
						<h4>Likes: {post.likes}</h4>
						<p>{post.content}</p>
					</div>
				))}
			</div>
		</section>
	);
}
