import { Post } from "@/app/lib/definitions";
import Input from "../../input";
import Textarea from "../../textarea";
import InputFile from "../../input-file";
import InputMacros from "./input-macros";

export default function NewPostForm({ type }: { type: Post['post_type'] }) {
	const title = {
		general: 'contenido',
		food: 'comida',
		workout: 'actividad física',
	}

	return (
		<div className="p-6">
			<h3 className="text-xl font-bold leading-none">Agregar {title[type]}</h3>

			<form className="mt-6 flex flex-col gap-6">
				<Input label="Título" id="title" required />
				<Textarea label="Descripción" id="content" />
				<InputFile id="img_url" label="Agregar imagen" />
				<input type="hidden" id="post_type" name="post_type" value={type} />

				{type === 'workout' && (
					<div className="w-36">
						<Input label="Duración (minutos)" id="workout-duration" type="number" min="0" defaultValue='0' />
					</div>
				)}

				{type === 'food' && (
					<div className="p-6 shadow w-fit bg-gradient-to-br from-primary-700 to-primary-300 text-white rounded-lg mt-6">
						<div className="">
							<h4 className="text-xl font-semibold leading-none">Macronutrientes (opcional)</h4>
							<div className="flex flex-wrap gap-6 mt-6">
								<InputMacros label="Proteínas" id="food-proteins" />
								<InputMacros label="Carbohidratos" id="food-carbs" />
								<InputMacros label="Grasas" id="food-fats" />
								<div className="max-w-40 mb-2">
									<div className="">
										<label htmlFor="food-kcal" className="block mb-2 text-sm font-medium text-primary-50">Total kilocalorías</label>
										<div className="flex">
											<input type="number" min={0} defaultValue={0} id="food-kcal" name="food-kcal" className="peer bg-primary-700 border border-primary-500 rounded-l-lg focus:ring-primary-400 block w-20 text-right p-1.5 focus:ring-2 focus:border-primary-500 outline-none" />
											<span title="kilocalorías" className="cursor-default p-1.5 px-3 rounded-r-lg bg-primary-600 border-y border-r border-primary-500 peer-focus:ring-2 peer-focus:ring-primary-400 peer-focus:border-primary-400">kcal</span>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				)}

				<button className="btn-primary">Publicar</button>
			</form>
		</div>
	)
}