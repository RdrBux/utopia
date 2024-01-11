import { CommentPost } from "@/app/lib/definitions";
import { formatDateDistance } from "@/app/lib/utils";
import Link from "next/link";

export default function FoodComment({ comment }: { comment: CommentPost }) {
	const { user_id, firstname, lastname, img_url, id, content, created_at } = comment;
	const name = `${firstname} ${lastname}`

	return (
		<div className="py-6">
			<div className="flex gap-3 items-center w-fit">
				<Link href={`/profile/${user_id}`}><img className="h-10 w-10 shrink-0 rounded-full" src={img_url} alt={`${name} profile picture`} /></Link>
				<div>
					<Link href={`/profile/${user_id}`}><span className="font-bold hover:underline">{name}</span></Link>
					<span className="text-gray-500 text-sm ml-3">{formatDateDistance(created_at)}</span>
				</div>
			</div>

			<p className="mt-3">{content}</p>
		</div>
	)
}