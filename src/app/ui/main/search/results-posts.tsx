import { getPostsByQuery } from "@/app/lib/data";
import Post from "../post";

export default async function ResultsPosts({ query }: { query?: string }) {
	if (!query) return;
	if (query.length < 5) return;

	const posts = await getPostsByQuery(query);

	return (
		<section className="flex flex-col gap-6">
			{
				posts.map(post => <Post key={post.id} post={post} />)
			}
		</section>
	)
}