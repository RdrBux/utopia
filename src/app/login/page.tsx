import Logo from "../ui/logo";
import { redirect } from "next/navigation";
import { ButtonGoogle, ButtonGuest } from "../ui/buttons";
import Link from "next/link";
import { getUser } from "../lib/utils";
import LoginForm from "../ui/login/login-form";
import LogoInverted from "../ui/logo-inverted";
import { robotoSlab } from "../ui/fonts";

export default async function Home() {
	const user = await getUser();
	if (user) redirect("/");

	return (
		<div className="container mx-auto px-4 my-6">
			<div className="grid lg:grid-cols-2 bg-card p-0 lg:p-3">
				<div className="hidden lg:flex rounded-t-lg lg:rounded-lg w-full h-full bg-primary-700 lg:px-12 p-6 flex-col gap-6 justify-center">
					<LogoInverted />
					<h1 className={`${robotoSlab.className} text-3xl lg:text-4xl font-bold text-white`}>Tu nueva forma de vivir y compartir un estilo de vida saludable</h1>
					<p className="text-white/75">Descubre Utopía, la red social que potencia tu bienestar y calidad de vida. Comparte momentos especiales, descubre recetas saludables y encuentra la motivación para mantenerte activo.</p>
				</div>

				<div className="p-6 flex flex-col gap-6 lg:px-24 lg:py-6 w-full">
					<div className="lg:hidden self-center justify-start my-6 scale-125"><Logo /></div>

					<div className="flex flex-col gap-3">
						<ButtonGoogle />
						<ButtonGuest />
					</div>
					<div className="flex items-center gap-2"><div className="w-full h-px bg-gray-200"></div> <span className="text-gray-500">o</span> <div className="w-full h-px bg-gray-200"></div></div>
					<h2 className={`${robotoSlab.className} form-title`}>Iniciar Sesión</h2>
					<div className="text-sm text-gray-600 -mt-3">¿No tienes una cuenta? <Link className="text-blue-600 font-semibold hover:underline" href="/signup">Regístrate</Link>.</div>
					<LoginForm />
				</div>
			</div>
		</div>
	)
}