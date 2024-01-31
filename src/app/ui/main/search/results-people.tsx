import { getUsersByQuery } from "@/app/lib/data";
import { getUser } from "@/app/lib/utils";
import Link from "next/link";

export default async function ResultsPeople({ query }: { query?: string }) {
	if (!query) return;

	const user = await getUser();
	if (!user) return;

	const users = await getUsersByQuery(query, user.id);
	if (users.length === 0) return;

	return (
		<section className="bg-card">
			<h2 className="text-xl font-bold leading-none">Personas</h2>

			<ul className="mt-3 divide-y divide-gray-200">

				{users.map((user) => (
					<li key={user.id}>
						<Link href={`/profile/${user.id}`} className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
							<img className="h-16 w-16 shrink-0 rounded-full" src={user.img_url || '/avatar.svg'} alt={`${user.firstname} ${user.lastname}`} />
							<div className="overflow-hidden">
								<div className="font-medium">{user.firstname} {user.lastname}</div>
								<div className="text-sm text-gray-500 truncate">{user.bio}</div>
							</div>
						</Link>
					</li>
				))}

			</ul>
		</section>
	)
}