import { getRecommendedFriends } from "@/app/lib/data"
import Link from "next/link";

export default async function RecommendedFriends() {
	const recommendedFriends = await getRecommendedFriends();
	if (!recommendedFriends) return;

	return (
		<aside className="bg-card h-fit pb-3">
			<h5 className="text-xl font-bold leading-none">Agregar amigos</h5>
			<ul className="mt-3 divide-y divide-gray-200">
				{
					recommendedFriends.map((friend) =>
						<li key={friend.id}>
							<Link href={`/profile/${friend.id}`} className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
								<img className="h-8 w-8 shrink-0 rounded-full" src={friend.img_url || '/avatar.jpg'} alt={`${friend.firstname} ${friend.lastname}`} />
								<div className="overflow-hidden">
									<div className="font-medium text-sm">{friend.firstname} {friend.lastname}</div>
									<div className="text-xs text-gray-500 truncate">{friend.bio}</div>
								</div>
							</Link>
						</li>
					)
				}
			</ul>
		</aside>
	)
}