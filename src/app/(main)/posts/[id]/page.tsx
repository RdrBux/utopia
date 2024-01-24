import { getPostById } from "@/app/lib/data";
import { formatDateDistance, getPageSession } from "@/app/lib/utils";
import DropdownPostPrivacy from "@/app/ui/dropdown-post-privacy";
import MacrosTable from "@/app/ui/main/macros-table";
import { CommentButtonClient } from "@/app/ui/posts/comment-button-client";
import LikeButtonServer from "@/app/ui/posts/like-button-server";
import PostComments from "@/app/ui/posts/post-comments";
import PostCountComments from "@/app/ui/posts/post-count-comments";
import PostLikes from "@/app/ui/posts/post-likes";
import RemovePostButton from "@/app/ui/posts/remove-post-button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { id: string } }) {
	const session = await getPageSession();
	if (!session) redirect('/login');

	const post = await getPostById(params.id)
	const { user_id, firstname, lastname, user_img_url, id, title, content, img_url, post_type, post_data, post_privacy, created_at } = post
	const name = `${firstname} ${lastname}`
	const avatar = user_img_url && user_img_url?.length > 0 ? user_img_url : '/avatar.svg'
	const data = post_data && JSON.parse(post_data)


	return (
		<div className="main-layout">
			<main className="flex flex-col gap-6 lg:col-start-2 bg-white py-6 rounded-lg border">
				<div className="flex justify-between items-center gap-3 -my-3 px-6">
					<Link href={`/profile/${user_id}`} className="flex gap-3 items-center w-fit group">
						<img className="h-10 w-10 shrink-0 rounded-full" src={avatar} alt={name} />
						<div>
							<p className="font-bold group-hover:underline">{name}</p>
							<p className="text-gray-500 text-sm">{formatDateDistance(created_at)}</p>
						</div>
					</Link>

					{
						session.user.userId === user_id && (
							<div className="flex gap-3">
								<DropdownPostPrivacy postId={id} privacy={post_privacy} />
								<RemovePostButton postId={id} />
							</div>
						)
					}
				</div>

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

				<div className="flex items-center justify-between px-6 -mb-3">
					<PostLikes postId={id} />

					<PostCountComments postId={id} />

				</div>

				<div className="grid grid-cols-2 border-y divide-x text-gray-600">
					<LikeButtonServer postId={id} />
					<CommentButtonClient />
				</div>

				<PostComments postId={id} />

			</main>
		</div>
	)
}