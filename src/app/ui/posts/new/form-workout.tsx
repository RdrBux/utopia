import Input from "../../input";
import InputFile from "../../input-file";
import Textarea from "../../textarea";

export default function FormWorkout() {
	return (
		<form className="p-6 flex flex-col gap-6">
			<h3 className="text-xl font-bold leading-none">Agregar actividad física</h3>

			<Input label="Nombre" id="workout-name" />
			<Textarea label="Descripción" id="workout-content" />
			<InputFile id="workout-image" title="Agregar imagen" />
			<div className="w-40"><Input label="Duración (minutos)" id="workout-name" type="number" min="0" defaultValue='0' /></div>



			<button className="btn-primary">Publicar</button>
		</form>
	)
}