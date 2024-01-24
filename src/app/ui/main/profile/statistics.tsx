export default function Statistics() {
	return (
		<section className="bg-card h-fit flex flex-col gap-6">
			<h2 className="form-title">Estadísticas</h2>

			<div className="border border-emerald-300 bg-emerald-50 text-emerald-950 rounded-lg p-6 flex flex-col gap-6">
				<h3 className="text-2xl font-bold leading-none text-center">Comidas</h3>
				<div className="text-center text-sm"><span className="inline-block py-1.5 px-3 mr-1.5 rounded-full border border-emerald-300 font-semibold">1200</span> kilocalorías totales diarias</div>
				<div className="flex items-center justify-evenly gap-6">
					<div className="flex flex-col items-center justify-center rounded-full p-6 border border-emerald-300 aspect-square">
						<p className="text-5xl font-bold">340</p>
						<p className="text-xs">kcal por comida</p>
					</div>

					<div className="flex flex-col items-center">
						<p>42%</p>
						<p className="text-xl font-bold">32.6g</p>
						<p className="text-xs">proteínas</p>
					</div>

					<div className="flex flex-col items-center">
						<p>42%</p>
						<p className="text-xl font-bold">32.6g</p>
						<p className="text-xs">carbohidratos</p>
					</div>

					<div className="flex flex-col items-center">
						<p>42%</p>
						<p className="text-xl font-bold">32.6g</p>
						<p className="text-xs">grasas</p>
					</div>
				</div>

				<div className="text-center text-sm -mt-3"><span className="inline-block py-1.5 px-3 rounded-full border border-emerald-300 font-semibold">6</span> comidas en el periodo seleccionado</div>

			</div>

			<div className="grid grid-cols-2 gap-6">
				<div className="border border-amber-300 bg-amber-50 text-amber-950 rounded-lg p-6 flex flex-col items-center gap-6">
					<h3 className="text-2xl font-bold leading-none">Actividad física</h3>
					<div className="flex w-40 flex-col items-center gap-2 justify-center rounded-full p-6 border border-amber-300 aspect-square">
						<div className="flex items-center gap-1"><p className="text-5xl font-bold">94</p><p className="font-bold">min</p></div>
						<p className="text-xs text-center">duración promedio por entrenamiento</p>
					</div>
					<div className="text-center text-sm -mt-3"><span className="inline-block py-1.5 px-3 rounded-full border border-amber-300 font-semibold">2</span> entrenamientos en el periodo seleccionado</div>

				</div>

				<div className="border border-indigo-300 bg-indigo-50 text-indigo-950 rounded-lg p-6 flex flex-col items-center gap-6">
					<h3 className="text-2xl font-bold leading-none">Descanso</h3>
					<div className="flex w-40 flex-col items-center gap-2 justify-center rounded-full p-6 border border-indigo-300 aspect-square">
						<div className="flex items-center gap-1"><p className="text-5xl font-bold">8.2</p><p className="font-bold">h</p></div>
						<p className="text-xs text-center">sueño promedio diario</p>
					</div>
					<div className="text-center text-sm -mt-3"><span className="inline-block py-1.5 px-3 rounded-full border border-indigo-300 font-semibold">3</span> descansos en el periodo seleccionado</div>

				</div>
			</div>
		</section>
	)
}