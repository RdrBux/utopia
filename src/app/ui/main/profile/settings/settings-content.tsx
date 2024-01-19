'use client'

import { useSearchParams } from "next/navigation"

export default function SettingsContent() {
	const searchParams = useSearchParams()
	const tab = searchParams.get('tab');

	return (
		<div className="px-6">
			{
				(tab === 'profile' || tab === null) && (
					<h1>Perfil</h1>
				)
			}

			{
				tab === 'privacy' && (
					<h1>Privacidad</h1>
				)
			}

			{
				tab === 'password' && (
					<h1>Contraseña</h1>
				)
			}

			{
				tab === 'account' && (
					<h1>Cuenta</h1>
				)
			}
		</div>
	)
}