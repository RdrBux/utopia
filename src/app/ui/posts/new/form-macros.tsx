'use client'

import { useState } from "react"

export default function FormMacros() {
	const [proteins, setProteins] = useState(0);
	const [carbs, setCarbs] = useState(0);
	const [fats, setFats] = useState(0);
	const [kcals, setKcals] = useState(0);

	function handleProteinsChange(e: React.ChangeEvent<HTMLInputElement>) {
		setProteins(Number(e.target.value));
		setKcals(Number(e.target.value) * 4 + carbs * 4 + fats * 9);
	}

	function handleCarbsChange(e: React.ChangeEvent<HTMLInputElement>) {
		setCarbs(Number(e.target.value));
		setKcals(Number(e.target.value) * 4 + proteins * 4 + fats * 9);
	}

	function handleFatsChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFats(Number(e.target.value));
		setKcals(Number(e.target.value) * 9 + proteins * 4 + carbs * 4);
	}

	return (
		<div className="p-6 shadow w-fit bg-gradient-to-br from-primary-700 to-primary-300 text-white rounded-lg mt-6">
			<div className="">
				<h4 className="text-xl font-semibold leading-none">Macronutrientes (opcional)</h4>
				<div className="flex flex-wrap gap-6 mt-6">

					<div className="text-white">
						<label htmlFor="food-proteins" className="block mb-2 text-sm font-medium text-primary-50">Proteínas</label>
						<div className="flex">
							<input value={proteins} onChange={handleProteinsChange} type="number" name="food-proteins" min={0} id="food-proteins" className="peer bg-primary-700 border border-primary-500 rounded-l-lg focus:ring-primary-400 block w-14 text-right p-1.5 focus:ring-2 focus:border-primary-500 outline-none" />
							<span title="gramos" className="cursor-default p-1.5 px-3 rounded-r-lg bg-primary-600 border-y border-r border-primary-500 peer-focus:ring-2 peer-focus:ring-primary-400 peer-focus:border-primary-400">g</span>
						</div>
					</div>

					<div className="text-white">
						<label htmlFor="food-carbs" className="block mb-2 text-sm font-medium text-primary-50">Carbohidratos</label>
						<div className="flex">
							<input value={carbs} onChange={handleCarbsChange} type="number" name="food-carbs" min={0} id="food-carbs" className="peer bg-primary-700 border border-primary-500 rounded-l-lg focus:ring-primary-400 block w-14 text-right p-1.5 focus:ring-2 focus:border-primary-500 outline-none" />
							<span title="gramos" className="cursor-default p-1.5 px-3 rounded-r-lg bg-primary-600 border-y border-r border-primary-500 peer-focus:ring-2 peer-focus:ring-primary-400 peer-focus:border-primary-400">g</span>
						</div>
					</div>

					<div className="text-white">
						<label htmlFor="food-fats" className="block mb-2 text-sm font-medium text-primary-50">Grasas</label>
						<div className="flex">
							<input value={fats} onChange={handleFatsChange} type="number" name="food-fats" min={0} id="food-fats" className="peer bg-primary-700 border border-primary-500 rounded-l-lg focus:ring-primary-400 block w-14 text-right p-1.5 focus:ring-2 focus:border-primary-500 outline-none" />
							<span title="gramos" className="cursor-default p-1.5 px-3 rounded-r-lg bg-primary-600 border-y border-r border-primary-500 peer-focus:ring-2 peer-focus:ring-primary-400 peer-focus:border-primary-400">g</span>
						</div>
					</div>

					<div className="max-w-40 mb-2">
						<div className="">
							<label htmlFor="food-kcal" className="block mb-2 text-sm font-medium text-primary-50">Total kilocalorías</label>
							<div className="flex">
								<input type="number" value={kcals} onChange={e => setKcals(Number(e.target.value))} min={0} id="food-kcal" name="food-kcal" className="peer bg-primary-700 border border-primary-500 rounded-l-lg focus:ring-primary-400 block w-20 text-right p-1.5 focus:ring-2 focus:border-primary-500 outline-none" />
								<span title="kilocalorías" className="cursor-default p-1.5 px-3 rounded-r-lg bg-primary-600 border-y border-r border-primary-500 peer-focus:ring-2 peer-focus:ring-primary-400 peer-focus:border-primary-400">kcal</span>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}