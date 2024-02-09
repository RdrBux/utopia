import { getPostLikes } from "@/app/lib/data";
import { robotoSlab } from "@/app/ui/fonts";
import Link from "next/link";

export default async function Home({ params }: { params: { id: string } }) {
	const users = await getPostLikes(params.id);

	return (
		<div className="main-layout">
			<main className="flex flex-col gap-3 bg-card pb-3 lg:col-start-2">
				<h2 className={`${robotoSlab.className} form-title`}>Me gusta</h2>

				<ul className="divide-y divide-gray-200">

					{
						users.map((user) => (
							<li key={user.id}>
								<Link href={`/profile/${user.id}`} className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
									<img className="h-16 w-16 shrink-0 rounded-full" src={user.img_url || '/avatar.svg'} alt={`${user.firstname} ${user.lastname}`} />
									<div className="overflow-hidden">
										<div className={`${robotoSlab.className} font-medium`}>{user.firstname} {user.lastname}</div>
										<div className="text-sm text-gray-500 truncate">{user.bio}</div>
									</div>
								</Link>
							</li>
						))
					}

				</ul>
			</main>
		</div>
	)
}