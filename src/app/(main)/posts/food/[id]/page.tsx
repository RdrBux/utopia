import { getFoodById } from "@/app/lib/data";
import { formatDateDistance } from "@/app/lib/utils";
import { MacrosTable } from "@/app/ui/main/post-food";
import { CommentButton } from "@/app/ui/posts/comment-button";
import FoodComments from "@/app/ui/posts/food/food-comments";
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
					<Link href={`/posts/food/${id}/likes`} className="group flex gap-1 text-sm items-center font-semibold">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-primary-700">
							<path d="M2.09 15a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM5.765 13H4.09V8c.663 0 1.218-.466 1.556-1.037a4.02 4.02 0 0 1 1.358-1.377c.478-.292.907-.706.989-1.26V4.32a9.03 9.03 0 0 0 0-2.642c-.028-.194.048-.394.224-.479A2 2 0 0 1 11.09 3c0 .812-.08 1.605-.235 2.371a.521.521 0 0 0 .502.629h1.733c1.104 0 2.01.898 1.901 1.997a19.831 19.831 0 0 1-1.081 4.788c-.27.747-.998 1.215-1.793 1.215H9.414c-.215 0-.428-.035-.632-.103l-2.384-.794A2.002 2.002 0 0 0 5.765 13Z" />
						</svg>

						<span className="group-hover:underline">2</span>
					</Link>

					<div className="flex gap-1 text-sm items-center font-semibold">
						3
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-primary-700 w-4 h-4">
							<path d="M1 8.74c0 .983.713 1.825 1.69 1.943.764.092 1.534.164 2.31.216v2.351a.75.75 0 0 0 1.28.53l2.51-2.51c.182-.181.427-.286.684-.294a44.298 44.298 0 0 0 3.837-.293C14.287 10.565 15 9.723 15 8.74V4.26c0-.983-.713-1.825-1.69-1.943a44.447 44.447 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Z" />
						</svg>

					</div>

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