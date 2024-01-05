import PostFood from "../post-food";
import PostWorkout from "../post-workout";

export default function ResultsPosts() {
	return (
		<section className="flex flex-col gap-6">
			<PostFood />
			<PostWorkout />
		</section>
	)
}