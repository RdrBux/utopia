import { getFoodById } from "@/app/lib/data";
import { formatDateDistance } from "@/app/lib/utils";
import { MacrosTable } from "@/app/ui/main/post-food";
import { CommentButton } from "@/app/ui/posts/comment-button";
import FoodComments from "@/app/ui/posts/food/food-comments";
import FoodCountComments from "@/app/ui/posts/food/food-count-comments";
import FoodLikes from "@/app/ui/posts/food/food-likes";
import Link from "next/link";

export default async function Home({ params }: { params: { id: string } }) {
	const food = await getFoodById(params.id)
	const { user_id, firstname, lastname, user_img_url, id, food_name, img_url, content, proteins, carbs, fats, kilo_cals, created_at } = food;
	const name = `${firstname} ${lastname}`
	const hasMacros = proteins && carbs && fats && kilo_cals;

	return (
		<div className="main-layout">
			<main className="flex flex-col gap-6 lg:col-start-2 bg-white py-6 rounded-lg border">
				<div className="flex gap-3 items-center px-6 group w-fit">
					<Link href={`/profile/${user_id}`}><img className="h-10 w-10 shrink-0 rounded-full" src={user_img_url} alt={`${name} profile picture`} /></Link>
					<div>
						<Link href={`/profile/${user_id}`}><span className="font-bold hover:underline">{name}</span></Link>
						<span className="text-gray-500 text-sm ml-3">{formatDateDistance(created_at)}</span>
					</div>
				</div>

				<img className="w-full" src={img_url} alt={food_name} />

				<div className="px-6 flex flex-col gap-6">
					<h4 className="text-xl font-bold leading-none">{food_name}</h4>
					<p className="">{content}</p>
					{
						hasMacros &&
						<MacrosTable proteins={proteins} carbs={carbs} fats={fats} kiloCals={kilo_cals} />
					}

				</div>

				<div className="flex items-center justify-between px-6 -mb-3">
					<FoodLikes postId={id} />

					<FoodCountComments postId={id} />

				</div>

				<div className="flex border-y divide-x text-gray-600">
					<button className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
						</svg>
						Me gusta
					</button>
					<CommentButton />
				</div>

				<FoodComments postId={id} />

			</main>
		</div>
	)
}