import { postIsLiked } from "@/app/lib/data";
import LikeButtonClient from "./like-button-client";

export default async function LikeButtonServer({ postId }: { postId: string }) {
	const isLiked = await postIsLiked(postId);

	return (
		<LikeButtonClient postId={postId} isLiked={isLiked ? isLiked.count > 0 : false} />
	)
}