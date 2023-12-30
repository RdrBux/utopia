import Post from "../ui/main/post";
import RecommendedFriends from "../ui/main/recommended-friends";
import UserPanel from "../ui/main/user-panel";

export default function Home() {
	return (
		<div className="grid grid-cols-[1fr_2fr_1fr] gap-8 my-8">
			<UserPanel />

			<main>
				<Post />
			</main>

			<RecommendedFriends />
		</div>
	)
}