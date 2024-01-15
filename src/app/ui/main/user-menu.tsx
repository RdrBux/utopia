'use client'

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Form from "../form";
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
		// FORM HIDES BEFORE SENDING DATA
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, [button, showMenu])

	return (
		<div className="relative">
			<button ref={button} onClick={() => setShowMenu(prev => !prev)} className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300">
				<span className="sr-only">Abrir menú de usuario</span>
				<img className="w-10 h-10 rounded-full" src="/avatar.jpg" alt="user photo" />
			</button>

			<div className={`${showMenu ? 'visible' : 'invisible'} z-10 absolute right-0 top-10 bg-card p-0 text-sm text-gray-700 w-40 shadow`}>
				<ul>
					<li>
						<Link href={`/profile/${session.user.userId}`} className="hover:bg-gray-100 flex items-center gap-3 rounded-t-lg px-4 py-4 w-full">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
							</svg>
							Ver perfil
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