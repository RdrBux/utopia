'use client'

import { postFood } from "@/app/lib/actions";
import Input from "../../input";
import InputFile from "../../input-file";
import Textarea from "../../textarea";
import InputMacros from "./input-macros";

export default function FormFood() {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		postFood(new FormData(e.target as HTMLFormElement));
	}

	return (
		<form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
			<h3 className="text-xl font-bold leading-none">Agregar comida</h3>

			<div>
				<label htmlFor="food-name" className="label">Nombre de la comida</label>
				<input type="text" id="food-name" name="food-name" className="input" required />
			</div>

			<div>
				<label htmlFor="food-content" className="label">Descripción</label>
				<textarea id="food-content" name="food-content" className="input" required ></textarea>
			</div>
			<InputFile id="food-image" title="Agregar imagen" />

			<div className="p-6 bg-emerald-100 border border-emerald-300 rounded-lg mt-6">
				<div className="">
					<h4 className="text-lg font-bold leading-none">Macronutrientes (opcional)</h4>
					<div className="flex gap-6 mt-6">
						<InputMacros label="Proteínas" id="food-proteins" />
						<InputMacros label="Carbohidratos" id="food-carbs" />
						<InputMacros label="Grasas" id="food-fats" />
					</div>
				</div>

				<div className="max-w-40 mt-6">
					<div className="">
						<label htmlFor="food-kcal" className="block mb-2 text-sm font-medium text-gray-900">Total kilocalorías</label>
						<div className="flex">
							<input type="number" min={0} defaultValue={0} id="food-kcal" name="food-kcal" className="peer bg-emerald-50 border border-emerald-300 text-gray-900 text rounded-l-lg focus:ring-emerald-500 block w-20 text-right p-2.5 focus:ring-2 focus:border-emerald-500 outline-none" />
							<span className="p-2.5 rounded-r-lg bg-emerald-200 border-y border-r font-semibold border-emerald-300 peer-focus:ring-2 peer-focus:ring-emerald-500 peer-focus:border-emerald-500">kcal</span>
						</div>
					</div>
				</div>

			</div>
			<button className="btn-primary">Publicar</button>
		</form>
	)
}