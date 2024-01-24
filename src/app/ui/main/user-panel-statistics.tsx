export default function UserPanelStatistics() {
	return (
		<section className="h-fit flex flex-col gap-3 mt-6">
			<h2 className="form-title text-center">Tus estadísticas</h2>

			<div className="border border-emerald-300 bg-emerald-50 text-emerald-950 rounded-lg p-3 flex flex-col items-center gap-4">
				<h3 className="text-xl font-bold leading-none text-center">Comidas</h3>
				<div className="text-center text-sm"><span className="inline-block py-1.5 px-3 mr-1.5 rounded-full border border-emerald-300 font-semibold">1200</span> kcal totales diarias</div>
				<div className="flex w-fit flex-col items-center justify-center rounded-full p-6 border border-emerald-300 aspect-square">
					<p className="text-5xl font-bold">340</p>
					<p className="text-xs">kcal por comida</p>
				</div>
				<div className="flex items-center justify-evenly gap-4">

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

				<div className="text-center text-sm leading-none"><span className="inline-block py-1.5 px-3 rounded-full border border-emerald-300 font-semibold">6</span> comidas en el periodo seleccionado</div>

			</div>

			<div className="grid grid-cols-2 gap-3">
				<div className="border border-amber-300 bg-amber-50 text-amber-950 rounded-lg p-6 flex flex-col items-center gap-4">
					<h3 className="text-xl font-bold leading-none">Actividad física</h3>
					<div className="flex w-28 flex-col items-center gap-1 justify-center rounded-full p-4 border border-amber-300 aspect-square">
						<div className="flex items-center gap-1"><p className="text-4xl font-bold">94</p><p className="font-bold">min</p></div>
						<p className="text-xs text-center">duración promedio</p>
					</div>
					<div className="text-center text-sm"><span className="inline-block py-1.5 px-3 rounded-full border border-amber-300 font-semibold">2</span> entrenamientos en el periodo seleccionado</div>

				</div>

				<div className="border border-indigo-300 bg-indigo-50 text-indigo-950 rounded-lg p-6 flex flex-col items-center gap-4">
					<h3 className="text-xl font-bold leading-none">Descanso <span className="invisible">diario</span></h3>
					<div className="flex w-28 flex-col items-center gap-1 justify-center rounded-full p-6 border border-indigo-300 aspect-square">
						<div className="flex items-center gap-1"><p className="text-4xl font-bold">8.2</p><p className="font-bold">h</p></div>
						<p className="text-xs text-center">diarias</p>
					</div>
					<div className="text-center text-sm"><span className="inline-block py-1.5 px-3 rounded-full border border-indigo-300 font-semibold">3</span> descansos en el periodo seleccionado</div>

				</div>
			</div>
		</section>
	)
}