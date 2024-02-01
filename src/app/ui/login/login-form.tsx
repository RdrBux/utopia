'use client'

import Link from "next/link";
import LoginButton from "./login-button";
import { login } from "@/app/lib/authActions";
import { useFormState } from "react-dom";

const initialState = {
	type: '',
	error: '',
}

export default function LoginForm() {
	const [state, formAction] = useFormState(login, initialState)

	return (
		<form
			action={formAction}
		>
			<div className="flex flex-col gap-6">
				<div>
					<label className="label" htmlFor="email">Correo electrónico</label>
					<input className="input" name="email" id="email" type="email" placeholder="nombre@correo.com" required />
					{state.type === 'email' && <p className="mt-2 text-sm text-red-600 -mb-3">{state.error}</p>}
				</div>

				<div>
					<label className="label" htmlFor="password">Contraseña</label>
					<input className="input" name="password" id="password" type="password" minLength={6} maxLength={255} placeholder="••••••••" required />
					{state.type === 'password' && <p className="mt-2 text-sm text-red-600 -mb-3">{state.error}</p>}
				</div>

				<Link className="self-end text-sm text-blue-600 font-semibold" href="/reset-password">¿Has olvidado la contraseña?</Link>

				<LoginButton />
			</div>
		</form>
	)
}