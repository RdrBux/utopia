import { getFriendRequests } from "@/app/lib/data";
import Link from "next/link";

export default async function FriendRequests() {
	const friendRequests = await getFriendRequests();
	if (!friendRequests || friendRequests.length === 0) return;

	return (
		<aside className="bg-card h-fit pb-3">
			<h5 className="text-xl font-bold leading-none">Solicitudes de amistad</h5>
			<ul className="mt-3 divide-y divide-gray-200">

				{friendRequests.map((friend) => (
					<li key={friend.id}>
						<Link href={`/profile/${friend.id}`} className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
							<img src={friend.img_url || '/avatar.svg'} alt={`${friend.firstname} ${friend.lastname}`} className="h-8 w-8 shrink-0 rounded-full" />
							<div className="overflow-hidden">
								<div className="font-medium text-sm">{friend.firstname} {friend.lastname}</div>
								<div className="text-xs text-gray-500 truncate">{friend.bio}</div>
							</div>
						</Link>
					</li>
				))}

				<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
					<div className="h-8 w-8 shrink-0 bg-primary-300 rounded-full"></div>
					<div className="overflow-hidden">
						<div className="font-medium text-sm">Juan Pérez</div>
						<div className="text-xs text-gray-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum eligendi ratione nihil similique! Eum dignissimos aliquid doloremque praesentium perferendis repellat soluta ab reprehenderit odit cupiditate iusto, quidem, tempora qui!</div>
					</div>
				</li>
			</ul>
		</aside>
	)
}