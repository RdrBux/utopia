'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginButton from "./login-button";
import { login } from "@/app/lib/authActions";

type Response = {
	type: string,
	error: string
}

export default function LoginForm() {
	const [response, setResponse] = useState<Response>({ type: '', error: '' });
	const [pending, setPending] = useState(false);

	const router = useRouter();
	const action = '/api/login'

	return (
		<form
			action={login}
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
			const responseText = await response.text();
			if (response.status === 200) {
				setResponse(JSON.parse(responseText));
			}
			if (response.status === 0) {
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

				<div>
					<label className="label" htmlFor="password">Contraseña</label>
					<input className="input" name="password" id="password" type="password" minLength={6} maxLength={255} placeholder="••••••••" required />
					{response.type === 'password' && <p className="mt-2 text-sm text-red-600 -mb-3">{response.error}</p>}
				</div>

				<Link className="self-end text-sm text-blue-600 font-semibold" href="/restore-account">¿Has olvidado la contraseña?</Link>

				<LoginButton pending={pending} />
			</div>
		</form>
	)
}