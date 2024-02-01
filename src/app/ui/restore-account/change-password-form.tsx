'use client'

import { resetPassword } from "@/app/lib/actions"
import { useFormState } from "react-dom"
import ChangePasswordButton from "./change-password-button"
import Link from "next/link"

type InitialState = {
	type: string
	error?: string
	success?: string
}

const initialState: InitialState = {
	type: '',
}


export default function ChangePasswordForm({ tokenId }: { tokenId: string }) {
	const [state, formAction] = useFormState(async (_: any, e: FormData) => await resetPassword(e, tokenId), initialState)

	return (
		<form action={formAction} className="flex flex-col gap-6 min-w-[320px]">
			<div>
				<label className="label flex justify-between" htmlFor="password">Nueva contraseña <span className="text-gray-500 font-normal">(mínimo 6 caracteres)</span></label>
				<input className="input" name="password" id="password" type="password" minLength={6} maxLength={255} placeholder="••••••••" required />
				{(state.type === 'password' && state.error) && <p className="mt-2 text-sm text-red-600 -mb-3">{state.error}</p>}
			</div>
			<div>
				<label className="label" htmlFor="repeat-password">Repetir nueva contraseña</label>
				<input className="input" name="repeat-password" id="repeat-password" type="password" minLength={6} maxLength={255} placeholder="••••••••" required />
				{(state.type === 'repeat-password' && state.error) && <p className="mt-2 text-sm text-red-600 -mb-3">{state.error}</p>}
				{(state.type === 'token' && state.error) && <p className="mt-2 text-sm text-red-600 -mb-3">{state.error}</p>}
			</div>


			{
				state.success ? (
					<div className="p-4 text-sm text-green-800 border border-green-200 rounded-lg bg-green-50" role="alert">
						<span className="font-medium">¡Contraseña cambiada!</span> Volver al <Link className="font-semibold underline" href="/login">inicio</Link>.
					</div>
				) : (
					<ChangePasswordButton />
				)
			}

		</form>
	)
}