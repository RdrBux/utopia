import { PostWithUser } from "@/app/lib/definitions";
import { formatDateDistance } from "@/app/lib/utils";
import Link from "next/link";
import MacrosTable from "./macros-table";
import PostLikes from "../posts/post-likes";
import PostCountComments from "../posts/post-count-comments";
import LikeButtonServer from "../posts/like-button-server";
import { CommentButtonServer } from "../posts/comment-button-server";

export default function Post({ post }: { post: PostWithUser }) {
	const { user_id, firstname, lastname, user_img_url, id, title, content, img_url, post_type, post_data, created_at } = post;
	const name = `${firstname} ${lastname}`;
	const avatar = user_img_url && user_img_url?.length > 0 ? user_img_url : '/avatar.svg';
	const data = post_data && JSON.parse(post_data)

	return (
		<div className="border rounded-lg overflow-hidden bg-white">
			<Link href={`/profile/${user_id}`} className="flex gap-3 items-center px-6 py-3 w-fit group">
				<img className="h-10 w-10 shrink-0 rounded-full" src={avatar} alt={name} />
				<div>
					<p className="font-bold group-hover:underline">{name}</p>
					<p className="text-gray-500 text-sm">{formatDateDistance(created_at)}</p>
				</div>
			</Link>

			<Link href={`/posts/${id}`} className="flex flex-col gap-6 pb-4">

				{
					img_url ? (
						<img className="w-full" src={img_url} alt={title} />
					) : (
						<hr />
					)
				}

				<div className="px-6 flex flex-col gap-6">
					<h4 className="text-xl font-bold leading-none">{title}</h4>
					<p className="">{content}</p>

					{
						post_type === 'workout' && (
							<p><b>Duración:</b> {JSON.parse(data.duration)} minutos.</p>
						)
					}

					{
						post_type === 'food' && (
							<MacrosTable macros={data} />
						)
					}

				</div>

			</Link>
			<div className="flex items-center justify-between px-6 pb-1">

				<PostLikes postId={id} />
				<PostCountComments postId={id} />

			</div>
			<div className="grid grid-cols-2 border-y divide-x text-gray-600">
				<LikeButtonServer postId={id} />
				<CommentButtonServer postId={id} />
			</div>
		</div>
	)
}