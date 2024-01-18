import { getPosts } from "@/app/lib/data"
import Post from "./post";

export default async function HomePosts() {
	const posts = await getPosts();

	return (
		<section className="flex flex-col gap-6">
			{
				posts.map(post => <Post key={post.id} post={post} />)
			}
		</section>
	)
}