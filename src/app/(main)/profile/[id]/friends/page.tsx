import { getUserById } from "@/app/lib/data";
import { getUser } from "@/app/lib/utils";
import FriendRequests from "@/app/ui/main/profile/friends/friend-requests";
import UserFriends from "@/app/ui/main/profile/friends/user-friends";
import RecommendedFriends from "@/app/ui/main/recommended-friends";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const user = await getUserById(params.id);
	if (!user) return;

	return {
		title: `Amigos de ${user.firstname} ${user.lastname}`
	}
}

export default async function Home({ params }: { params: { id: string } }) {
	const user = await getUser();
	if (!user) redirect('/login')

	return (
		<div className="main-layout">

			{user.id === params.id && <FriendRequests />}

			<UserFriends userId={params.id} />

			{user.id === params.id && <RecommendedFriends />}
		</div>
	)
}