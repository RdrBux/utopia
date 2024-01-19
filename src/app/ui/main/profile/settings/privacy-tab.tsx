export default function PrivacyTab() {
	return (
		<form className="flex flex-col gap-6">
			<h1 className="form-title">Privacidad</h1>

			<div>
				<label htmlFor="privacy-statistics" className="block mb-2 text-sm font-medium text-gray-900">Visibilidad de tus estadísticas</label>
				<select className="grid bg-gray-50 border w-fit border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:ring-2 outline-none p-2.5" name="privacy-statistics" id="privacy-statistics">
					<option className="" value="all">Todas las personas</option>
					<option className="" value="friends">Solo amigos</option>
					<option className="" value="me">Solo yo</option>
				</select>
			</div>

			<div>
				<label htmlFor="privacy-friends" className="block mb-2 text-sm font-medium text-gray-900">Visibilidad de tus amigos</label>
				<select className="grid bg-gray-50 border w-fit border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:ring-2 outline-none p-2.5" name="privacy-statistics" id="privacy-friends">
					<option className="" value="all">Todas las personas</option>
					<option className="" value="friends">Solo amigos</option>
					<option className="" value="me">Solo yo</option>
				</select>
			</div>

			<div className="flex gap-3 mt-6">
				<button className="btn-primary">Guardar cambios</button>
				<button className="btn-secondary">Cancelar</button>
			</div>
		</form>
	)
}