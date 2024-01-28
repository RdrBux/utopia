import { redirect } from "next/navigation";
import { getPageSession } from "@/app/lib/utils";
import Link from "next/link";
import UserPanelStatistics from "./user-panel-statistics";

export default async function UserPanel() {
	const session = await getPageSession();
	if (!session) redirect("/login");

	const { firstname, lastname, img_url, bio, userId } = session.user
	const avatar = img_url && img_url?.length > 0 ? img_url : '/avatar.svg'

	return (
		<aside className="hidden lg:flex flex-col gap-6 bg-card h-fit">
			<Link href={`/profile/${userId}`} className="flex flex-col gap-6">
				<img className="rounded-full self-center w-24 h-24" src={avatar} alt="profile picture" />
				<div className="text-center -mt-3">
					<h5 className="mb-1 text-xl font-medium">{firstname} {lastname}</h5>
					<div className="text-sm text-gray-500">{bio}</div>
				</div>
			</Link>

			{/* <UserPanelStatistics /> */}
		</aside>
	)
}