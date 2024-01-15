import { redirect } from "next/navigation";
import { getPageSession } from "@/app/lib/utils";
import Link from "next/link";
import Form from "../form";

export default async function UserPanel() {
	const session = await getPageSession();
	if (!session) redirect("/login");

	const { firstname, lastname, img_url, bio, userId } = session.user
	const avatar = img_url && img_url?.length > 0 ? img_url : '/avatar.jpg'

	return (
		<aside className="flex flex-col gap-6 bg-card h-fit">
			<Link href={`/profile/${userId}`} className="flex flex-col gap-6">
				<img className="rounded-full self-center w-24 h-24" src={avatar} alt="profile picture" />
				<div className="text-center -mt-3">
					<h5 className="mb-1 text-xl font-medium">{firstname} {lastname}</h5>
					<div className="text-sm text-gray-500">{bio}</div>
				</div>
			</Link>
			<h5 className="text-xl font-bold leading-none mt-3">Progreso esta semana</h5>
			<div className="p-4 rounded-lg bg-primary-100 border border-primary-300 text-primary-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam ut quod quo aperiam eaque maiores.</div>
			<div className="p-4 rounded-lg bg-primary-100 border border-primary-300 text-primary-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam ut quod quo aperiam eaque maiores.</div>
		</aside>
	)
}