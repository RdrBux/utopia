import Link from "next/link";
import { Button } from "../buttons";
import Input from "../input";
import CheckboxTerms from "./checkbox-terms";

export default function SignupForm() {
	return (
		<form className="flex flex-col gap-6 bg-card">
			<h1 className="form-title">Crea una cuenta nueva</h1>

			<Input label="Correo electrónico" id="email" type="email" placeholder="nombre@correo.com" />
			<div className="flex gap-3">
				<Input label="Nombre" id="firstname" placeholder="ej: Juan" />
				<Input label="Apellido(s)" id="lastname" placeholder="ej: Pérez" />
			</div>
			<Input label="Contraseña" type='password' id="password" placeholder="••••••••" />
			<Input label="Repetir contraseña" type='password' id="password" placeholder="••••••••" />
			<CheckboxTerms />
			<Button>Crear cuenta</Button>
			<div className="text-sm text-gray-600">¿Ya tienes una cuenta? <Link className="text-blue-600 font-semibold hover:underline" href="/login">Inicia sesión</Link>.</div>
		</form>
	)
}