import Navbar from "@/components/navbar/navbar";
import CreatePost from "@/components/createPost/createPost";
import Footer from "@/components/footer/footer";
import styles from "@/app/home.module.css";
import { authClient } from "@/lib/auth-client";

export default async function Post() {
	
	
	return (
		<div className={styles.container}>
			<Navbar />
			<CreatePost />
			<Footer />
		</div>
	);
}
