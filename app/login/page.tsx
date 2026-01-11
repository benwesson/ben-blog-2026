"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
export default function Login() {
	
	const handleGithubLogin = async () => {
		await authClient.signIn.social({
			provider: "github",
			callbackURL: "/",
			errorCallbackURL: "/",
			newUserCallbackURL: "/",
			disableRedirect: false, // usually you want redirect
		});
	};
	const router = useRouter();
	const handleLogout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/"); // redirect to login page
				},
			},
		});
	};

	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={handleGithubLogin}>Sign in with GitHub</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
