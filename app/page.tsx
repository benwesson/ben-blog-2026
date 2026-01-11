import Navbar from "@/components/navbar/navbar";
import Featured from "@/components/featured/featured";
import Categories from "@/components/categories/categories";
import Recent from "@/components/recent/recent";
import Footer from "@/components/footer/footer";
import styles from "@/app/home.module.css";
import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

export default async function Home() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	console.log("Session Data:", session);

	return (
		<div className={styles.container}>
			<Navbar />
			<Featured />
			{/* <Categories /> */}
			<Recent />
			<Footer />
		</div>
	);
}
