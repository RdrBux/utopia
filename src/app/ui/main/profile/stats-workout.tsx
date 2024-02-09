import { getUserWorkouts } from "@/app/lib/data";
import { PeriodType } from "./dropdown-statistics";
import { robotoSlab } from "../../fonts";

type WorkoutData = {
	duration: number
}

export default async function StatsWorkout({ paramsId, period }: { paramsId: string, period: PeriodType }) {
	const workouts = await getUserWorkouts(paramsId, period);

	const workoutData: WorkoutData[] = [];

	workouts.map((workout) => {
		const data = JSON.parse(workout.post_data as string)
		if (data.duration === 0) {
			return
		}
		workoutData.push(data);
	})

	const totalDuration = workoutData.reduce((a, b) => a + b.duration, 0);

	return (
		<div className="border border-amber-300 bg-amber-50 text-amber-950 rounded-lg p-6">
			{workoutData.length === 0 ? (
				<div className="">No hay información de entrenamientos en el periodo seleccionado.</div>
			) : (
				<div className="flex flex-col items-center gap-6">
					<h3 className={`${robotoSlab.className} text-2xl font-bold leading-none text-center`}>Actividad física</h3>
					<div className="grid lg:grid-cols-2 place-items-center gap-6">
						<div className="flex w-40 flex-col items-center gap-2 justify-center rounded-full p-6 border border-amber-300 aspect-square">
							<div className="flex items-center gap-1"><p className="text-5xl font-bold">{totalDuration > 0 ? Math.round(totalDuration / workoutData.length) : 0}</p><p className="font-bold">min</p></div>
							<p className="text-xs text-center">duración promedio por entrenamiento</p>
						</div>
						<div className="text-center text-sm -mt-3"><span className="inline-block py-1.5 px-3 rounded-full border border-amber-300 font-semibold">{workoutData.length}</span> entrenamiento{workoutData.length === 1 ? '' : 's'} en el periodo seleccionado</div>
					</div>
				</div>
			)
			}
		</div>
	)
}