import Logo from "../ui/logo";
import { auth } from "@/auth/lucia";
import { redirect } from "next/navigation";
import { ButtonGoogle, ButtonGuest } from "../ui/buttons";
import Link from "next/link";
import Form from "../ui/form";
import { getPageSession } from "../lib/utils";

export default async function Home() {
	const session = await getPageSession();
	if (session) redirect("/");

	return (
		<div className="container mx-auto px-4 my-6">
			<div className="grid lg:grid-cols-2 bg-card lg:p-3">
				<div className="hidden lg:block bg-primary-600 w-full h-full rounded-lg"></div>

				<div className="flex flex-col gap-6 lg:px-28 lg:py-6 w-full">
					<div className="self-center justify-start mb-6"><Logo /></div>
					<h1 className="form-title text-center">Iniciar Sesión</h1>
					<div className="flex flex-col gap-3">
						<ButtonGoogle />
						<ButtonGuest />
					</div>
					<div className="flex items-center gap-2"><div className="w-full h-px bg-gray-200"></div> <span className="text-gray-500">o</span> <div className="w-full h-px bg-gray-200"></div></div>
					<Form action="/api/login">
						<div className="flex flex-col gap-6">
							<div>
								<label className="label" htmlFor="email">Correo electrónico</label>
								<input className="input" name="email" id="email" type="email" placeholder="nombre@correo.com" required />
							</div>
							<div>
								<label className="label" htmlFor="password">Contraseña</label>
								<input className="input" name="password" id="password" type="password" placeholder="••••••••" required />
							</div>
							<Link className="self-end text-sm text-blue-600 font-semibold" href="/restore-account">¿Has olvidado la contraseña?</Link>
							<button className="btn-primary" type="submit">Iniciar sesión</button>
						</div>
					</Form>
					<div className="text-sm text-gray-600">¿No tienes una cuenta? <Link className="text-blue-600 font-semibold hover:underline" href="/signup">Regístrate</Link>.</div>

				</div>
			</div>
		</div>
	)
}