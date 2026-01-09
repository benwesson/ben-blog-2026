import Navbar from "@/components/navbar/navbar";
import Featured from "@/components/featured/featured";
import Categories from "@/components/categories/categories";
import Recent from "@/components/recent/recent";
import Footer from "@/components/footer/footer";

import styles from "@/app/home.module.css"

export default function Home() {
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
