import { getPostComments, getUserById } from "@/app/lib/data"
import PostComment from "./post-comment";
import PostCreateComment from "./post-create-comment";
import { getPageSession } from "@/app/lib/utils";

export default async function PostComments({ postId }: { postId: string }) {
	const session = await getPageSession();
	if (!session) return;
	const userData = await getUserById(session.user.userId);

	const comments = await getPostComments(postId);

	return (
		<div className="px-6 flex flex-col divide-y -mt-6">

			{
				comments.map(comment => <PostComment comment={comment} key={comment.id} />)
			}

			<PostCreateComment postId={postId} userData={userData} />
		</div>


	)
}