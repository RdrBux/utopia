import NewPostButton from "../ui/main/new-post-button";
import Post from "../ui/main/post";
import PostFood from "../ui/main/post-food";
import RecommendedFriends from "../ui/main/recommended-friends";
import UserPanel from "../ui/main/user-panel";

export default function Home() {
	return (
		<div className="grid grid-cols-[1fr_2fr_1fr] gap-6 my-6">
			<NewPostButton />

			<UserPanel />

			<main className="flex flex-col gap-6">
				<PostFood />
				<Post />
				<Post />
			</main>

			<RecommendedFriends />
		</div>
	)
}