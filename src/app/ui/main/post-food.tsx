import { PostFoodType } from "@/app/lib/definitions";
import { formatDateDistance } from "@/app/lib/utils";
import Link from "next/link";
import PostFoodLike from "./post-food-like";
import PostFoodComment from "./post-food-comment";

export default function PostFood({ food }: { food: PostFoodType }) {
	const { user_id, firstname, lastname, user_img_url, id, food_name, img_url, content, proteins, carbs, fats, kilo_cals, created_at } = food;
	const name = `${firstname} ${lastname}`
	const hasMacros = proteins && carbs && fats && kilo_cals;

	return (
		<div className="border rounded-lg overflow-hidden bg-white">
			<div className="flex flex-col gap-6 py-6">
				<div className="flex gap-3 items-center px-6 w-fit">
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
				<PostFoodLike postId={id} />

				<PostFoodComment postId={id} />
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