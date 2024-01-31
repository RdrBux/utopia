'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import CheckboxTerms from "./checkbox-terms";
import Link from "next/link";
import SignupButton from "./signup-button";
import { signup } from "@/app/lib/authActions";

export default function SignupForm() {
	const [pending, setPending] = useState(false);
	const [response, setResponse] = useState({ type: '', error: '' });

	/* const router = useRouter(); */
	/* const action = '/api/signup' */

	return (
		<form
			action={signup}
		/* method="post"
		onSubmit={async (e) => {
			e.preventDefault();
			setPending(true);
			const formData = new FormData(e.currentTarget);
			const response = await fetch(action, {
				method: "POST",
				body: formData,
				redirect: "manual"
			});
			if (response.status === 200) {
				const responseText = await response.text();
				setResponse(JSON.parse(responseText));
			}
			if (response.status === 0) {
				// redirected
				// when using `redirect: "manual"`, response status 0 is returned
				return router.refresh();
			}
			setPending(false);
		}} */
		>
			<div className="flex flex-col gap-6">
				<div>
					<label className="label" htmlFor="email">Correo electrónico</label>
					<input className="input" name="email" id="email" type="email" placeholder="nombre@correo.com" required />
					{response.type === 'email' && <p className="mt-2 text-sm text-red-600 -mb-3">{response.error}</p>}
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
					{response.type === 'firstname' && <p className="mt-2 text-sm text-red-600 -mb-3">{response.error}</p>}
					{response.type === 'lastname' && <p className="mt-2 text-sm text-red-600 -mb-3">{response.error}</p>}
				</div>
				<div>
					<label className="label flex justify-between" htmlFor="password">Contraseña <span className="text-gray-500 font-normal">(mínimo 8 caracteres)</span></label>
					<input className="input" name="password" id="password" type="password" minLength={8} maxLength={255} placeholder="••••••••" required />
					{response.type === 'password' && <p className="mt-2 text-sm text-red-600 -mb-3">{response.error}</p>}
				</div>
				<div>
					<label className="label" htmlFor="repeat-password">Repetir contraseña</label>
					<input className="input" name="repeat-password" id="repeat-password" type="password" minLength={8} maxLength={255} placeholder="••••••••" required />
					{response.type === 'repeat-password' && <p className="mt-2 text-sm text-red-600 -mb-3">{response.error}</p>}
				</div>
				<CheckboxTerms />
				{response.type === 'terms' && <p className="mt-2 text-sm text-red-600 -mb-3">{response.error}</p>}

				<SignupButton pending={pending} />
				<div className="text-sm text-gray-600">¿Ya tienes una cuenta? <Link className="text-blue-600 font-semibold hover:underline" href="/login">Inicia sesión</Link>.</div>
			</div>
		</form>
	)
}