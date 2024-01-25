import { getUserWorkouts } from "@/app/lib/data";
import { PeriodType } from "./dropdown-statistics";

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

	return (
		<div className="border border-amber-300 bg-amber-50 text-amber-950 rounded-lg p-6 flex flex-col items-center gap-6">
			<h3 className="text-2xl font-bold leading-none">Actividad física</h3>
			<div className="flex w-40 flex-col items-center gap-2 justify-center rounded-full p-6 border border-amber-300 aspect-square">
				<div className="flex items-center gap-1"><p className="text-5xl font-bold">{Math.round(workoutData.reduce((a, b) => a + b.duration, 0) / workoutData.length)}</p><p className="font-bold">min</p></div>
				<p className="text-xs text-center">duración promedio por entrenamiento</p>
			</div>
			<div className="text-center text-sm -mt-3"><span className="inline-block py-1.5 px-3 rounded-full border border-amber-300 font-semibold">{workoutData.length}</span> entrenamientos en el periodo seleccionado</div>

		</div>
	)
}