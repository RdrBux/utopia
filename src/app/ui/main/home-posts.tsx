import { getFriendsPosts, getPosts, getUserPosts } from "@/app/lib/data"
import Post from "./post";
import { PostWithUser } from "@/app/lib/definitions";
import { getUser } from "@/app/lib/utils";

export default async function HomePosts({ filterPosts }: { filterPosts?: string }) {
	let posts: PostWithUser[] = []

	if (filterPosts === 'friends') {
		posts = await getFriendsPosts() ?? [];
	} else if (filterPosts === 'me') {
		const user = await getUser();
		if (!user) return;
		posts = await getUserPosts(user.id) ?? [];
	} else {
		posts = await getPosts() ?? [];
	}

	if (posts.length === 0) return;

	return (
		<section className="flex flex-col gap-6">
			{
				posts.map(post => <Post key={post.id} post={post} />)
			}
		</section>
	)
}

