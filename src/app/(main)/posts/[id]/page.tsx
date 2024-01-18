import { getPostById } from "@/app/lib/data";
import { formatDateDistance } from "@/app/lib/utils";
import { MacrosTable } from "@/app/ui/main/post-food";
import { CommentButton } from "@/app/ui/posts/comment-button";
import LikeButton from "@/app/ui/posts/like-button";
import PostComments from "@/app/ui/posts/post-comments";
import PostCountComments from "@/app/ui/posts/post-count-comments";
import PostLikes from "@/app/ui/posts/post-likes";
import Link from "next/link";

export default async function Home({ params }: { params: { id: string } }) {
	const post = await getPostById(params.id)
	const { user_id, firstname, lastname, user_img_url, id, title, content, img_url, post_type, post_data, created_at } = post
	const name = `${firstname} ${lastname}`
	const avatar = user_img_url && user_img_url?.length > 0 ? user_img_url : '/avatar.jpg'

	return (
		<div className="main-layout">
			<main className="flex flex-col gap-6 lg:col-start-2 bg-white py-6 rounded-lg border">
				<div className="flex gap-3 items-center px-6 group w-fit">
					<Link href={`/profile/${user_id}`}><img className="h-10 w-10 shrink-0 rounded-full" src={avatar} alt={name} /></Link>
					<div>
						<Link href={`/profile/${user_id}`}><span className="font-bold hover:underline">{name}</span></Link>
						<span className="text-gray-500 text-sm ml-3">{formatDateDistance(created_at)}</span>
					</div>
				</div>

				{img_url && <img className="w-full" src={img_url} alt={title} />}

				<div className="px-6 flex flex-col gap-6">
					<h4 className="text-xl font-bold leading-none">{title}</h4>
					<p className="">{content}</p>

				</div>

				<div className="flex items-center justify-between px-6 -mb-3">
					<PostLikes postId={id} />

					<PostCountComments postId={id} />

				</div>

				<div className="flex border-y divide-x text-gray-600">
					<LikeButton postId={id} />
					<CommentButton />
				</div>

				<PostComments postId={id} />

			</main>
		</div>
	)
}