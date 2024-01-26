import HomePosts from "../ui/main/home-posts";
import NewPostButton from "../ui/main/new-post-button";
import NewPostSection from "../ui/main/new-post-section";
import RecommendedFriends from "../ui/main/recommended-friends";
import UserPanel from "../ui/main/user-panel";

export default function Home({ params }: { params: { id: string } }) {
	return (
		<div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-6 my-6">
			<NewPostButton />

			<UserPanel paramsId={params.id} />

			<main className="flex flex-col gap-6">
				<NewPostSection />
				<HomePosts />
			</main>

			<RecommendedFriends />
		</div>
	)
}