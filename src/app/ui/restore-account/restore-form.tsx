'use client'

import { createResetPassword } from "@/app/lib/actions";
import { Button } from "../buttons";
import Input from "../input";
import { useFormState } from "react-dom";
import RestoreButton from "./restore-button";
import { robotoSlab } from "../fonts";

type InitialState = {
	type: string
	error?: string
	success?: string
}

const initialState: InitialState = {
	type: '',
}

export default function RestoreForm() {
	const [state, formAction] = useFormState(createResetPassword, initialState)

	return (
		<form action={formAction} className="flex flex-col gap-6 bg-card">
			<h1 className={`${robotoSlab.className} form-title`}>¿Has olvidado la contraseña?</h1>

			<p className="text-gray-500 max-w-md">¡No hay problema! Te enviaremos por correo electrónico las instrucciones para recuperar tu cuenta.</p>

			<Input label="Correo electrónico" id="email" type="email" placeholder="nombre@correo.com" />
			{(state.type === 'email' && state.error) && <p className="-mt-4 -mb-3 text-sm text-red-600">{state.error}</p>}
			{
				state.success ? (
					<div className="p-4 mb-4 text-sm text-green-800 border border-green-200 rounded-lg bg-green-50" role="alert">
						<span className="font-medium">Correo enviado:</span> {state.success}
					</div>
				) : (
					<RestoreButton />
				)
			}

		</form>
	)
}