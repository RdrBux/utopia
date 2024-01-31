import { deleteComment } from "@/app/lib/actions";
import { CommentPost } from "@/app/lib/definitions";
import { formatDateDistance, getUser } from "@/app/lib/utils";
import Link from "next/link";
import DeleteCommentButton from "./delete-comment-button";

export default async function PostComment({ comment }: { comment: CommentPost }) {
	const user = await getUser();
	if (!user) return;

	const { user_id, firstname, lastname, post_id, img_url, id, content, created_at } = comment;
	const name = `${firstname} ${lastname}`
	const avatar = img_url && img_url?.length > 0 ? img_url : '/avatar.svg'

	async function handleDelete() {
		'use server'
		await deleteComment(id, post_id)
	}

	return (
		<div className="py-6 relative">
			{user.id === user_id && (
				<form action={handleDelete}>
					<DeleteCommentButton />
				</form>
			)
			}
			<Link href={`/profile/${user_id}`} className="flex gap-3 items-center w-fit group">
				<img className="h-10 w-10 shrink-0 rounded-full" src={avatar} alt={name} />
				<div>
					<p className="font-bold group-hover:underline">{name}</p>
					<p className="text-gray-500 text-sm">{formatDateDistance(created_at)}</p>
				</div>
			</Link>

			<p className="mt-3">{content}</p>
		</div>
	)
}