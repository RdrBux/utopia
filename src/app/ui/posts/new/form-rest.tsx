import Input from "../../input";

export default function FormRest() {
	return (
		<form className="p-6 flex flex-col gap-6">
			<h3 className="text-xl font-bold leading-none">Agregar descanso</h3>
			<div className="max-w-44"><Input label="Inicio" id="rest-start" type="datetime-local" /></div>
			<div className="max-w-44">
				<Input label="Finalización" id="rest-end" type="datetime-local" />
			</div>
			<button className="btn-primary">Publicar</button>
		</form>
	)
}