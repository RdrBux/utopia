import Link from "next/link";
import { Button, ButtonGoogle, ButtonGuest } from "../buttons";
import Input from "../input";

export default function LoginForm() {
	return (
		<form className="flex flex-col gap-6 bg-card">
			<h1 className="form-title">Iniciar Sesión</h1>
			<div className="flex gap-3">
				<ButtonGoogle />
				<ButtonGuest />
			</div>
			<div className="flex items-center gap-2"><div className="w-full h-px bg-gray-200"></div> <span className="text-gray-500">o</span> <div className="w-full h-px bg-gray-200"></div></div>
			<Input label="Correo electrónico" id="email" type="email" placeholder="nombre@correo.com" />
			<Input label="Contraseña" type='password' id="password" placeholder="••••••••" />
			<Link className="self-end text-sm text-blue-600 font-semibold" href="/restore-account">¿Has olvidado la contraseña?</Link>
			<Button>Iniciar sesión</Button>
			<div className="text-sm text-gray-600">¿No tienes una cuenta? <Link className="text-blue-600 font-semibold hover:underline" href="/signup">Regístrate</Link>.</div>
		</form>
	)
}