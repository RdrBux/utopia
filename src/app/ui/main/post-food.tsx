import { PostFoodType } from "@/app/lib/definitions";
import { formatDateDistance } from "@/app/lib/utils";
import Link from "next/link";

export default function PostFood({ food }: { food: PostFoodType }) {
	const { user_id, firstname, lastname, user_img_url, id, food_name, img_url, content, proteins, carbs, fats, kilo_cals, created_at } = food;
	const name = `${firstname} ${lastname}`
	const hasMacros = proteins && carbs && fats && kilo_cals;

	return (
		<div className="border rounded-lg overflow-hidden bg-white">
			<div className="flex flex-col gap-6 py-6">
				<div className="flex gap-3 items-center px-6 group w-fit">
					<Link href={`/profile/${user_id}`}><img className="h-10 w-10 shrink-0 rounded-full" src={user_img_url} alt={`${name} profile picture`} /></Link>
					<div>
						<Link href={`/profile/${user_id}`}><span className="font-bold hover:underline">{name}</span></Link>
						<span className="text-gray-500 text-sm ml-3">{formatDateDistance(created_at)}</span>
					</div>
				</div>
				<Link href={`/posts/food/${id}`}>
					<img className="w-full" src={img_url} alt={food_name} />
					<div className="px-6 flex flex-col gap-6 mt-6">
						<h4 className="text-xl font-bold leading-none">{food_name}</h4>
						<p className="">{content}</p>
						{
							hasMacros &&
							<MacrosTable proteins={proteins} carbs={carbs} fats={fats} kiloCals={kilo_cals} />
						}
					</div>
				</Link>

			</div>
			<div className="flex border-t divide-x text-gray-600">
				<button className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
					</svg>
					Me gusta (2)
				</button>
				<Link href={`/posts/food/${id}`} className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
						<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
					</svg>
					Comentar (12)
				</Link>
			</div>
		</div>
	)
}

type Macros = {
	proteins: number,
	carbs: number,
	fats: number,
	kiloCals: number
}

export function MacrosTable({ proteins, carbs, fats, kiloCals }: Macros) {
	return (
		<table className="w-fit text-sm text-left rtl:text-right text-gray-500">
			<thead className="text-xs text-gray-700 uppercase bg-gray-100">
				<tr>
					<th scope="col" className="px-6 py-3 rounded-s-lg">
						MACROS
					</th>
					<th scope="col" className="px-6 py-3 rounded-e-lg">

					</th>
				</tr>
			</thead>
			<tbody>
				<tr className="bg-white">
					<th scope="row" className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
						Proteínas
					</th>
					<td className="px-6 py-1">
						{proteins}g
					</td>
				</tr>
				<tr className="bg-white">
					<th scope="row" className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
						Carbohidratos
					</th>
					<td className="px-6 py-1">
						{carbs}g
					</td>
				</tr>
				<tr className="bg-white">
					<th scope="row" className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
						Grasas
					</th>
					<td className="px-6 py-1">
						{fats}g
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr className="font-semibold text-gray-900">
					<th scope="row" className="px-6 py-1 text-base">Total calorías</th>
					<td className="px-6 py-1">{kiloCals} kcal</td>
				</tr>
			</tfoot>
		</table>
	)
}