import Link from "next/link";
import Input from "../ui/input";
import Logo from "../ui/logo";
import { Button, ButtonGoogle, ButtonGuest } from "../ui/buttons";

export default function Home() {
	return (
		<div className="flex items-center justify-center">
			<div className="w-full"><Logo /></div>

			<div className="flex flex-col items-center w-fit shrink-0 m-12">
				<div className="p-8 rounded-lg shadow-lg w-fit min-w-96 bg-white">
					<form className="flex flex-col gap-6">
						<h1 className="font-bold text-2xl">Iniciar Sesión</h1>
						<div className="flex gap-3">
							<ButtonGoogle />
							<ButtonGuest />
						</div>
						<div className="flex items-center gap-2"><div className="w-full h-px bg-gray-200"></div> <span className="text-gray-500">o</span> <div className="w-full h-px bg-gray-200"></div></div>
						<Input label="Correo electrónico" id="email" />
						<Input label="Contraseña" type='password' id="password" placeholder="••••••••" />
						<Link className="self-end text-sm text-blue-600 font-semibold" href="/">¿Has olvidado la contraseña?</Link>
						<Button>Iniciar Sesión</Button>
						<div className="text-sm text-gray-600">¿No tienes una cuenta? <Link className="text-blue-600 font-semibold" href="/signup">Registrate</Link></div>
					</form>
				</div>
			</div>
		</div>
	)
}