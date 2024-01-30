import { getFriendsPosts, getPosts, getUserPosts } from "@/app/lib/data"
import Post from "./post";
import { PostWithUser } from "@/app/lib/definitions";
import { getPageSession } from "@/app/lib/utils";

export default async function HomePosts({ filterPosts }: { filterPosts?: string }) {
	let posts: PostWithUser[] = []

	if (filterPosts === 'friends') {
		posts = await getFriendsPosts() ?? [];
	} else if (filterPosts === 'me') {
		const session = await getPageSession();
		if (!session) return;
		posts = await getUserPosts(session.user.userId) ?? [];
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