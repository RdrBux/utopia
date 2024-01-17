'use client'

import { User } from "lucia";
import { useSearchParams } from "next/navigation"
import { useEffect } from "react";

export default function PostCreateComment({ postId, userData }: { postId: string, userData: User }) {
	const searchParams = useSearchParams()

	const comment = searchParams.get('comment');

	useEffect(() => {
		if (comment === 'true') window.scrollTo(0, document.body.scrollHeight);

	}, [comment])

	const avatar = userData.img_url && userData.img_url?.length > 0 ? userData.img_url : '/avatar.jpg'
	const name = `${userData.firstname} ${userData.lastname}`

	return (
		<form className="flex gap-1 pt-6">
			<img className="h-10 w-10 shrink-0 rounded-full" src={avatar} alt={name} />
			<textarea id="content" name="content" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Escribe un comentario..." autoFocus={comment === 'true'}></textarea>
			<button type="submit" aria-label="Enivar mensaje" className="inline-flex justify-center p-2 text-primary-600 rounded-lg h-fit cursor-pointer hover:bg-primary-100">
				<svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
					<path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
				</svg>
			</button>
		</form>
	)
}