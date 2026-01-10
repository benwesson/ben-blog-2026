import { prisma } from "../lib/prisma";

export async function getPosts() {
	const posts = await prisma.post.findMany({
		where: { published: true },
		include: { author: true },
		orderBy: { createdAt: "desc" },
	});
	return posts;
}



