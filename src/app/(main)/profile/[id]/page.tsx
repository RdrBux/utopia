import { getUserById } from "@/app/lib/data";
import { getPageSession } from "@/app/lib/utils";
import NewPostButton from "@/app/ui/main/new-post-button";
import NewPostSection from "@/app/ui/main/new-post-section";
import FriendsList from "@/app/ui/main/profile/friends-list";
import FriendshipMenu from "@/app/ui/main/profile/friendship-menu";
import ProfilePosts from "@/app/ui/main/profile/profile-posts";
import Statistics from "@/app/ui/main/profile/statistics";
import UserNotFound from "@/app/ui/main/profile/user-not-found";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { id: string } }) {
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
					<img className="rounded-full w-40 h-40 shrink-0" src={avatar} alt={name} />

					<div className="">
						<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">{name}</h1>
						<p className="text-gray-500">{bio}</p>
					</div>
				</div>

				<div className="mt-12 flex gap-6 items-end">
					<FriendsList id={params.id} userPrivacyFriends={userData.privacy_friends} />

					<div className="shrink-0 ml-auto">
						<FriendshipMenu viewerId={session.user.userId} profileId={params.id} />
					</div>
				</div>

			</section>

			<div className="grid grid-cols-2 gap-6 mt-6">
				<Statistics />

				<section className="flex flex-col gap-6">
					{session.user.userId === params.id && <NewPostSection />}
					<ProfilePosts userId={params.id} />
				</section>
			</div>
		</div>
	)
}