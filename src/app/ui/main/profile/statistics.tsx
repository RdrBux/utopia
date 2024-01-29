import DropdownStatistics, { PeriodType } from "./dropdown-statistics";
import StatsFood from "./stats-food";
import StatsWorkout from "./stats-workout";

export default function Statistics({ paramsId, period = 'all' }: { paramsId: string, period?: PeriodType }) {
	return (
		<section className="bg-card h-fit flex flex-col gap-6">
			<div className="flex items-center gap-2 justify-between">
				<h2 className="form-title">Estadísticas</h2>

				{<DropdownStatistics />}
			</div>

			<StatsFood paramsId={paramsId} period={period} />

			<div className="grid grid-cols-2 gap-6">
				<StatsWorkout paramsId={paramsId} period={period} />

				<div className="border border-indigo-300 bg-indigo-50 text-indigo-950 rounded-lg p-3 lg:p-6 flex flex-col items-center gap-6">
					<h3 className="text-2xl font-bold leading-none text-center">Descanso <span className="invisible lg:hidden">diario</span></h3>
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