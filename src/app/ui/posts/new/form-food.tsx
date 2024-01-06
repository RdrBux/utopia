import Input from "../../input";
import InputFile from "../../input-file";

export default function FormFood() {
	return (
		<form className="p-6 flex flex-col gap-6">
			<h3 className="text-xl font-bold leading-none">Agregar comida</h3>

			<Input label="Nombre" id="food-name" />
			<Input label="Descripción" id="food-content" />
			<InputFile id="food-image" title="Agregar imagen" />

			<div className="mt-6">
				<h4 className="text-lg font-bold leading-none">Macronutrientes (en gramos)</h4>
				<div className="flex gap-3 mt-3">
					<Input label="Proteínas" id="food-proteins" />
					<Input label="Carbohidratos" id="food-carbs" />
					<Input label="Grasas" id="food-fats" />
				</div>
			</div>

			<Input label="Total kilocalorías" id="food-kilocals" />

			<button className="btn-primary">Publicar</button>
		</form>
	)
}