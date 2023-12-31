import NewPostButton from "@/app/ui/main/new-post-button";
import NewPostSection from "@/app/ui/main/new-post-section";
import PostFood from "@/app/ui/main/post-food";
import PostRest from "@/app/ui/main/post-rest";
import PostWorkout from "@/app/ui/main/post-workout";
import Link from "next/link";

export default function Home() {
	return (
		<div className="my-6">
			<NewPostButton />

			<section className="bg-card">
				<div className="flex gap-6 items-center">
					<img className="rounded-full w-40 h-40 shrink-0" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile picture" />

					<div className="">
						<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">Juan Pérez</h1>
						<p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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
						<Link className="btn-primary" href="/profile/me/edit">Editar perfil</Link>
						<Link className="btn-secondary ml-3" href="/profile/me/privacy">Privacidad</Link>
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
					<NewPostSection />
					<PostFood />
					<PostWorkout />
					<PostRest />
				</section>
			</div>
		</div>
	)
}