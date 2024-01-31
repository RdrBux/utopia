import Logo from "../ui/logo";
import { redirect } from "next/navigation";
import { ButtonGoogle, ButtonGuest } from "../ui/buttons";
import Link from "next/link";
import { getUser } from "../lib/utils";
import LoginForm from "../ui/login/login-form";

export default async function Home() {
	const user = await getUser();
	if (user) redirect("/");

	return (
		<div className="container mx-auto px-4 my-6">
			<div className="grid lg:grid-cols-2 bg-card lg:rounded-3xl lg:p-3">
				<div className="hidden lg:block bg-primary-600 h-full w-full relative rounded-2xl overflow-hidden">
					{/* <img className="absolute inset-0 h-full w-full object-cover" src="https://hips.hearstapps.com/hmg-prod/images/female-runner-running-at-summer-park-trail-healthy-royalty-free-image-1591373138.jpg?crop=0.627xw:0.985xh;0.163xw,0.0151xh&resize=1200:*" alt="" /> */}
				</div>

				<div className="flex flex-col gap-6 lg:px-28 lg:py-6 w-full">
					<div className="self-center justify-start mb-6"><Logo /></div>
					<h1 className="form-title text-center">Iniciar Sesión</h1>
					<div className="flex flex-col gap-3">
						<ButtonGoogle />
						<ButtonGuest />
					</div>
					<div className="flex items-center gap-2"><div className="w-full h-px bg-gray-200"></div> <span className="text-gray-500">o</span> <div className="w-full h-px bg-gray-200"></div></div>
					<LoginForm />
					<div className="text-sm text-gray-600">¿No tienes una cuenta? <Link className="text-blue-600 font-semibold hover:underline" href="/signup">Regístrate</Link>.</div>
				</div>
			</div>
		</div>
	)
}