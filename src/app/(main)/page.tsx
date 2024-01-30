import { Suspense } from "react";
import HomePosts from "../ui/main/home-posts";
import HomePostsFilter from "../ui/main/home-posts-filter";
import NewPostButton from "../ui/main/new-post-button";
import NewPostSection from "../ui/main/new-post-section";
import RecommendedFriends from "../ui/main/recommended-friends";
import UserPanel from "../ui/main/user-panel";
import { SkeletonPost, SkeletonPosts, SkeletonRecommendedFriends } from "../ui/skeletons";

export default function Home({ searchParams }: { searchParams: { posts?: string } }) {
	return (
		<div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-6 my-6">
			<NewPostButton />

			<UserPanel />

			<main className="flex flex-col gap-6">
				<NewPostSection />

				<div className="lg:hidden"><HomePostsFilter /></div>

				<Suspense fallback={<SkeletonPosts />}>
					<HomePosts filterPosts={searchParams.posts} />
				</Suspense>
			</main>

			<Suspense fallback={<SkeletonRecommendedFriends />}>
				<RecommendedFriends />
			</Suspense>
		</div>
	)
}