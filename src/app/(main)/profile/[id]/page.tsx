import { getUserById } from "@/app/lib/data";
import { getPageSession } from "@/app/lib/utils";
import NewPostButton from "@/app/ui/main/new-post-button";
import NewPostSection from "@/app/ui/main/new-post-section";
import { PeriodType } from "@/app/ui/main/profile/dropdown-statistics";
import FriendsList from "@/app/ui/main/profile/friends-list";
import FriendshipMenu from "@/app/ui/main/profile/friendship-menu";
import ProfilePosts from "@/app/ui/main/profile/profile-posts";
import Statistics from "@/app/ui/main/profile/statistics";
import UserNotFound from "@/app/ui/main/profile/user-not-found";
import { SkeletonButton, SkeletonPosts } from "@/app/ui/skeletons";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Home({ params, searchParams }: { params: { id: string }, searchParams: { period?: PeriodType } }) {
	const session = await getPageSession();
	if (!session) redirect('/login')

	const userData = await getUserById(params.id);
	if (!userData) return <UserNotFound />

	const { firstname, lastname, img_url, bio } = userData;
	const name = `${firstname} ${lastname}`
	const avatar = img_url && img_url?.length > 0 ? img_url : '/avatar.svg'

	return (
		<div className="my-6">
			<NewPostButton />

			<section className="bg-card">
				<div className="flex gap-6 items-center">
					<img className="rounded-full w-28 lg:w-40 aspect-square shrink-0" src={avatar} alt={name} />

					<div className="">
						<h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-5xl">{name}</h1>
						<p className="text-gray-500">{bio}</p>
					</div>
				</div>

				<div className="mt-12 flex gap-6 items-end">
					<Suspense fallback={null}><FriendsList id={params.id} userPrivacyFriends={userData.privacy_friends} /></Suspense>

					<div className="shrink-0 ml-auto">
						<Suspense fallback={<SkeletonButton />}><FriendshipMenu viewerId={session.user.userId} profileId={params.id} /></Suspense>
					</div>
				</div>

			</section>

			<div className="grid lg:grid-cols-2 gap-6 mt-6">
				<Statistics paramsId={params.id} period={searchParams.period} />

				<section className="flex flex-col gap-6">
					{session.user.userId === params.id && <NewPostSection />}
					<Suspense fallback={<SkeletonPosts />}>
						<ProfilePosts userId={params.id} />
					</Suspense>
				</section>
			</div>
		</div>
	)
}