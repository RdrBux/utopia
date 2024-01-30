'use client'

import { Post } from "@/app/lib/definitions";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function HomePostsFilter() {
	const [showMenu, setShowMenu] = useState(false);
	const menu = useRef<HTMLButtonElement>(null);
	const searchParams = useSearchParams();
	const filterPosts = searchParams.get('posts') ?? 'all';
	const { replace } = useRouter();

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (menu.current && !menu.current.contains(e.target as HTMLElement)) {
				setShowMenu(false);
			}
		}

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, [menu, showMenu])

	const options = {
		'all': 'Todos',
		'friends': 'Amigos',
		'me': 'Solo yo'
	}

	function handlePosts(option: Post['post_privacy']) {
		replace(`?posts=${option}`)
		setShowMenu(false);
	}

	return (
		<div className="relative flex items-center gap-2 -my-1">
			<div className="h-[1px] w-full bg-gray-300"></div>
			<button ref={menu} title="Visibilidad de publicaciones" onClick={() => setShowMenu(prev => !prev)} className="text-sm flex items-center gap-1 shrink-0 text-gray-600 pr-2" type="button">
				Publicaciones de: <span className="font-semibold">{Object.keys(options).includes(filterPosts) ? options[filterPosts as keyof typeof options] : 'Todos'}</span>
				<svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
				</svg>
				<span className="sr-only">Abrir menú de visibilidad de publicaciones</span>
			</button>

			<div className={`${showMenu ? 'block' : 'hidden'} z-10 absolute right-0 top-6 bg-white divide-y divide-gray-100 rounded-lg border shadow w-36`}>
				<ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconButton">
					<li>
						<button onClick={() => handlePosts('all')} className={`${(filterPosts !== 'friends' && filterPosts !== 'me') ? 'font-semibold' : ''} w-full px-4 py-2 hover:bg-gray-100 flex gap-3 items-center`}>
							{all}
							Todos
						</button>
					</li>
					<li>
						<button onClick={() => handlePosts('friends')} className={`${filterPosts === 'friends' ? 'font-semibold' : ''} w-full px-4 py-2 hover:bg-gray-100 flex gap-3 items-center`}>
							{friends}
							Amigos
						</button>
					</li>
					<li>
						<button onClick={() => handlePosts('me')} className={`${filterPosts === 'me' ? 'font-semibold' : ''} w-full px-4 py-2 hover:bg-gray-100 flex gap-3 items-center`}>
							{me}
							Solo yo
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

const all = (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
		<path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
	</svg>
)

const friends = (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
		<path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
	</svg>
)

const me = (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
		<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
	</svg>
)