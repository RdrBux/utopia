'use client'

import CheckboxTerms from "./checkbox-terms";
import Link from "next/link";
import SignupButton from "./signup-button";
import { signup } from "@/app/lib/authActions";
import { useFormState } from "react-dom";

const initialState = {
	type: '',
	error: '',
}

export default function SignupForm() {
	const [state, formAction] = useFormState(signup, initialState)

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
				<div className="flex gap-3">
					<div>
						<label className="label" htmlFor="firstname">Nombre</label>
						<input className="input" name="firstname" id="firstname" type="text" placeholder="ej: Juan" required />
					</div>
					<div>
						<label className="label" htmlFor="lastname">Apellido(s)</label>
						<input className="input" name="lastname" id="lastname" type="text" placeholder="ej: Pérez" required />
					</div>
					{state.type === 'firstname' && <p className="mt-2 text-sm text-red-600 -mb-3">{state.error}</p>}
					{state.type === 'lastname' && <p className="mt-2 text-sm text-red-600 -mb-3">{state.error}</p>}
				</div>
				<div>
					<label className="label flex justify-between" htmlFor="password">Contraseña <span className="text-gray-500 font-normal">(mínimo 8 caracteres)</span></label>
					<input className="input" name="password" id="password" type="password" minLength={8} maxLength={255} placeholder="••••••••" required />
					{state.type === 'password' && <p className="mt-2 text-sm text-red-600 -mb-3">{state.error}</p>}
				</div>
				<div>
					<label className="label" htmlFor="repeat-password">Repetir contraseña</label>
					<input className="input" name="repeat-password" id="repeat-password" type="password" minLength={8} maxLength={255} placeholder="••••••••" required />
					{state.type === 'repeat-password' && <p className="mt-2 text-sm text-red-600 -mb-3">{state.error}</p>}
				</div>
				<CheckboxTerms />
				{state.type === 'terms' && <p className="mt-2 text-sm text-red-600 -mb-3">{state.error}</p>}

				<SignupButton />
				<div className="text-sm text-gray-600">¿Ya tienes una cuenta? <Link className="text-blue-600 font-semibold hover:underline" href="/login">Inicia sesión</Link>.</div>
			</div>
		</form>
	)
}