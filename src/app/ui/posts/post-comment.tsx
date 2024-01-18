import { CommentPost } from "@/app/lib/definitions";
import { formatDateDistance } from "@/app/lib/utils";
import Link from "next/link";

export default function PostComment({ comment }: { comment: CommentPost }) {
	const { user_id, firstname, lastname, img_url, id, content, created_at } = comment;
	const name = `${firstname} ${lastname}`
	const avatar = img_url && img_url?.length > 0 ? img_url : '/avatar.svg'

	return (
		<div className="py-6">
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