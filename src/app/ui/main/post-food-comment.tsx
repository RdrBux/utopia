import { getFoodCommentsCount } from "@/app/lib/data";
import Link from "next/link";

export default async function PostFoodComment({ postId }: { postId: string }) {
	const commentsCount = await getFoodCommentsCount(postId);

	return (
		<Link href={`/posts/food/${postId}?comment=true`} className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
			</svg>
			Comentar {commentsCount.count > 0 ? `(${commentsCount.count})` : ''}
		</Link>
	)
}