import { getFriends, getFriendshipStatus } from "@/app/lib/data";
import { UserData } from "@/app/lib/definitions";
import { getUser } from "@/app/lib/utils";
import Link from "next/link";
import { robotoSlab } from "../../fonts";

export default async function FriendsList({ id, userPrivacyFriends }: { id: string, userPrivacyFriends: UserData['privacy_friends'] }) {
	const user = await getUser();
	if (!user) return;

	const friends = await getFriends(id);

	if (!friends) return <div></div>
	if (friends.length === 0) return <div></div>

	if (userPrivacyFriends === 'me' && id !== user.id) return <div></div>

	if (userPrivacyFriends === 'friends' && id !== user.id) {
		const friendshipStatus = await getFriendshipStatus(id);
		if (friendshipStatus?.status !== 'accepted') return <div></div>;
	}


	return (
		<Link href={`/profile/${id}/friends`} className="">
			<h3 className={`${robotoSlab.className} text-xl font-bold leading-none`}>Amigos</h3>
			<ul className="flex mt-3 ml-3">

				{
					friends.map((friend, index) => {
						if (index === 4) return (
							<li><div className="bg-gray-500 -ml-3 h-10 w-10 min-w-10 rounded-full grid place-content-center text-white font-semibold pl-0.5">{friends.length - index}+</div></li>
						)
						if (index > 4) return;

						return <li key={friend.id}><img src={friend.img_url || '/avatar.svg'} alt={`${friend.firstname} ${friend.lastname}`} className="-ml-3 h-10 w-10 rounded-full shrink-0 min-w-10" /></li>
					})
				}

			</ul>
		</Link>
	)
}