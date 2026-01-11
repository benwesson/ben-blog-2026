import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: "http://localhost:3000",
	authPath: "/api/auth", // matches app/api/auth/[...all]/route.ts
});

export const { signIn, signUp, useSession } = authClient;
