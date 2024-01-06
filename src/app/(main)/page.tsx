import NewPostButton from "../ui/main/new-post-button";
import NewPostSection from "../ui/main/new-post-section";
import PostFood from "../ui/main/post-food";
import PostWorkout from "../ui/main/post-workout";
import RecommendedFriends from "../ui/main/recommended-friends";
import UserPanel from "../ui/main/user-panel";

export default function Home() {
	return (
		<div className="grid grid-cols-[1fr_2fr_1fr] gap-6 my-6">
			<NewPostButton />

			<UserPanel />

			<main className="flex flex-col gap-6">
				<NewPostSection />
				<PostFood />
				<PostWorkout />
			</main>

			<RecommendedFriends />
		</div>
	)
}