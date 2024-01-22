import { getFriends, getUserById } from "@/app/lib/data"
import Link from "next/link";

export default async function UserFriends({ userId }: { userId: string }) {
	const user = await getUserById(userId);

	const friends = await getFriends(userId)
	if (friends.length === 0) return;

	return (
		<main className="flex flex-col gap-6 bg-card h-fit pb-3 lg:col-start-2">
			<h2 className="form-title">Amigos de {user.firstname} {user.lastname}</h2>
			<ul className="divide-y divide-gray-200">
				{
					friends.map((friend) => (
						<li key={friend.id}>
							<Link href={`/profile/${friend.id}`} className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
								<img src={friend.img_url || '/avatar.svg'} className="h-16 w-16 shrink-0 rounded-full" alt={`${friend.firstname} ${friend.lastname}`} />
								<div className="overflow-hidden">
									<div className="font-medium">{friend.firstname} {friend.lastname}</div>
									<div className="text-sm text-gray-500 truncate">{friend.bio}</div>
								</div>
							</Link>
						</li>
					))
				}

			</ul>
		</main>
	)
}