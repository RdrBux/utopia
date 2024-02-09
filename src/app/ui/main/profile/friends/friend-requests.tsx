import { getFriendRequests } from "@/app/lib/data";
import { robotoSlab } from "@/app/ui/fonts";
import Link from "next/link";

export default async function FriendRequests() {
	const friendRequests = await getFriendRequests();
	if (!friendRequests || friendRequests.length === 0) return;

	return (
		<aside className="bg-card h-fit pb-3">
			<h5 className={`${robotoSlab.className} text-xl font-bold leading-none`}>Solicitudes de amistad</h5>
			<ul className="mt-3 divide-y divide-gray-200">

				{friendRequests.map((friend) => (
					<li key={friend.id}>
						<Link href={`/profile/${friend.id}`} className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
							<img src={friend.img_url || '/avatar.svg'} alt={`${friend.firstname} ${friend.lastname}`} className="h-8 w-8 shrink-0 rounded-full" />
							<div className="overflow-hidden">
								<div className={`${robotoSlab.className} font-medium text-sm`}>{friend.firstname} {friend.lastname}</div>
								<div className="text-xs text-gray-500 truncate">{friend.bio}</div>
							</div>
						</Link>
					</li>
				))}

			</ul>
		</aside>
	)
}