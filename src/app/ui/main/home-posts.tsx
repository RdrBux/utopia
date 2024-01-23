import { getPosts } from "@/app/lib/data"
import Post from "./post";

export default async function HomePosts() {
	const posts = await getPosts();
	if (!posts) return;

	return (
		<section className="flex flex-col gap-6">
			{
				posts.map(post => <Post key={post.id} post={post} />)
			}
		</section>
	)
}