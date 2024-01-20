'use client'

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Session } from "lucia";
import LogoutForm from "./logout-form";

export default function UserMenu({ session }: { session: Session }) {
	const [showMenu, setShowMenu] = useState(false);
	const button = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (button.current && !button.current.contains(e.target as HTMLElement)) {
				setShowMenu(false);
			}
		}
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, [button, showMenu])

	const avatar = session.user.img_url && session.user.img_url?.length > 0 ? session.user.img_url : '/avatar.svg'

	return (
		<div className="relative">
			<button ref={button} onClick={() => setShowMenu(prev => !prev)} className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300">
				<span className="sr-only">Abrir menú de usuario</span>
				<img className="w-10 h-10 rounded-full" src={avatar} alt={`${session.user.firstname} ${session.user.lastname}`} />
			</button>

			<div className={`${showMenu ? 'visible' : 'invisible'} z-10 absolute right-0 top-10 bg-card px-0 py-2 text-sm text-gray-700 w-40 shadow`}>
				<ul>
					<li>
						<Link href={`/profile/${session.user.userId}`} className="hover:bg-gray-100 flex items-center gap-3 px-4 py-3 w-full">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
							</svg>
							Ver perfil
						</Link>
					</li>
					<li>
						<Link href={`/profile/${session.user.userId}/settings`} className="hover:bg-gray-100 flex items-center gap-3 px-4 py-3 w-full">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
							</svg>
							Configuración
						</Link>
					</li>
					<li>
						<LogoutForm />
					</li>
				</ul>
			</div>

		</div>
	)
}