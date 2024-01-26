import { getUserFoods } from "@/app/lib/data";
import { PeriodType } from "./dropdown-statistics";
import { FoodData } from "@/app/lib/definitions";
import { roundTo100 } from "@/app/lib/utils";

export default async function StatsFood({ paramsId, period }: { paramsId: string, period: PeriodType }) {
	const foods = await getUserFoods(paramsId, period);

	const foodData: FoodData[] = [];

	foods.forEach((food) => {
		const data = JSON.parse(food.post_data as string)
		if (data.kcals === 0) {
			return
		}
		foodData.push(data)
	})

	const sums = {
		proteins: 0,
		carbs: 0,
		fats: 0,
		grams: 0,
		kcals: 0,
	}

	foodData.forEach((food) => {
		sums.proteins += food.proteins
		sums.carbs += food.carbs
		sums.fats += food.fats
		sums.grams += food.proteins + food.carbs + food.fats
		sums.kcals += food.kcals
	})

	const percentage = roundTo100([sums.proteins / sums.grams * 100, sums.carbs / sums.grams * 100, sums.fats / sums.grams * 100])

	return (
		<div className="border border-emerald-300 bg-emerald-50 text-emerald-950 rounded-lg p-6 flex flex-col gap-6">
			<h3 className="text-2xl font-bold leading-none text-center">Comidas</h3>
			{period === 'today' && <div className="text-center text-sm"><span className="inline-block py-1.5 px-3 mr-1.5 rounded-full border border-emerald-300 font-semibold">{(foodData.reduce((acc, curr) => acc + curr.kcals, 0)).toFixed(0)}</span> kilocalorías acumuladas diarias</div>}
			<div className="flex items-center flex-col lg:flex-row gap-6">
				<div className="flex flex-col items-center justify-center rounded-full p-6 border border-emerald-300 aspect-square">
					<p className="text-5xl font-bold">{sums.kcals > 0 ? (sums.kcals / foodData.length).toFixed(0) : 0}</p>
					<p className="text-xs text-center">kcal por comida</p>
				</div>

				<div className="flex items-center justify-evenly gap-3 w-full">
					<div className="flex flex-col items-center">
						{!isNaN(percentage[0]) && <p>{percentage[0]}%</p>}
						<p className="text-xl font-bold">{sums.proteins > 0 ? (sums.proteins / foodData.length).toFixed(0) : 0}g</p>
						<p className="text-xs">proteínas</p>
					</div>

					<div className="flex flex-col items-center">
						{!isNaN(percentage[1]) && <p>{percentage[1]}%</p>}
						<p className="text-xl font-bold">{sums.carbs > 0 ? (sums.carbs / foodData.length).toFixed(0) : 0}g</p>
						<p className="text-xs">carbohidratos</p>
					</div>

					<div className="flex flex-col items-center">
						{!isNaN(percentage[2]) && <p>{percentage[2]}%</p>}
						<p className="text-xl font-bold">{sums.fats > 0 ? (sums.fats / foodData.length).toFixed(0) : 0}g</p>
						<p className="text-xs">grasas</p>
					</div>
				</div>
			</div>

			<div className="text-center text-sm lg:-mt-3"><span className="inline-block py-1.5 px-3 rounded-full border border-emerald-300 font-semibold">{foodData.length}</span> comida{foodData.length > 1 ? 's' : ''} en el periodo seleccionado</div>

		</div>
	)
}