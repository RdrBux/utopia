import { getUserById } from "@/app/lib/data";
import { getPageSession } from "@/app/lib/utils";
import NewPostButton from "@/app/ui/main/new-post-button";
import NewPostSection from "@/app/ui/main/new-post-section";
import ExtraMenu from "@/app/ui/main/profile/extra-menu";
import ProfilePosts from "@/app/ui/main/profile/profile-posts";
import UserNotFound from "@/app/ui/main/profile/user-not-found";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { id: string } }) {
	const session = await getPageSession();
	if (!session) redirect('/login')

	const userData = await getUserById(params.id);
	if (!userData) return <UserNotFound />

	const { firstname, lastname, img_url, bio } = userData;
	const name = `${firstname} ${lastname}`
	const avatar = img_url && img_url?.length > 0 ? img_url : '/avatar.svg'

	return (
		<div className="my-6">
			<NewPostButton />

			<section className="bg-card">
				<div className="flex gap-6 items-center">
					<img className="rounded-full w-40 h-40 shrink-0" src={avatar} alt={name} />

					<div className="">
						<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">{name}</h1>
						<p className="text-gray-500">{bio}</p>
					</div>
				</div>

				<div className="mt-12 flex gap-6 items-end">
					<Link href="/profile/me/friends" className="">
						<h3 className="text-xl font-bold leading-none">Amigos</h3>
						<ul className="flex mt-3">
							<li><div className="bg-primary-600 -ml-2 h-10 w-10 rounded-full"></div></li>
							<li><div className="bg-primary-500 -ml-2 h-10 w-10 rounded-full"></div></li>
							<li><div className="bg-primary-400 -ml-2 h-10 w-10 rounded-full"></div></li>
							<li><div className="bg-primary-300 -ml-2 h-10 w-10 rounded-full"></div></li>
							<li><div className="bg-gray-500 -ml-2 h-10 w-10 rounded-full grid place-content-center text-white font-semibold pl-0.5">5+</div></li>
						</ul>
					</Link>
					<div className="shrink-0 ml-auto">
						<ExtraMenu viewerId={session.user.userId} profileId={params.id} />
					</div>
				</div>

			</section>

			<div className="grid grid-cols-2 gap-6 mt-6">
				<section className="bg-card h-fit flex flex-col gap-6">
					<h2 className="form-title">Progreso personal</h2>
					<div className="p-4 rounded-lg bg-primary-100 border border-primary-300 text-primary-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam ut quod quo aperiam eaque maiores.</div>
					<div className="p-4 rounded-lg bg-primary-100 border border-primary-300 text-primary-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam ut quod quo aperiam eaque maiores.</div>
				</section>

				<section className="flex flex-col gap-6">
					{session.user.userId === params.id && <NewPostSection />}
					<ProfilePosts userId={params.id} />
				</section>
			</div>
		</div>
	)
}