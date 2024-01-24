'use client'

import { commentPost } from "@/app/lib/actions";
import { UserData } from "@/app/lib/definitions";
import { useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react";
import FormCommentButton from "./form-comment-button";

export default function PostCreateComment({ postId, userData }: { postId: string, userData: UserData }) {
	const searchParams = useSearchParams()

	const form = useRef<HTMLFormElement>(null);

	const comment = searchParams.get('comment');

	useEffect(() => {
		if (comment === 'true') window.scrollTo(0, document.body.scrollHeight);

	}, [comment])

	const avatar = userData.img_url && userData.img_url?.length > 0 ? userData.img_url : '/avatar.svg'
	const name = `${userData.firstname} ${userData.lastname}`

	async function handleComment(data: FormData) {
		const content = String(data.get('content'))
		if (content.length === 0) return

		await commentPost(postId, content);
		form.current && form.current.reset()
	}

	return (
		<form action={(data) => handleComment(data)} ref={form} className="flex gap-1 items-center pt-6">
			<img className="h-10 w-10 shrink-0 rounded-full" src={avatar} alt={name} />
			<textarea id="content" name="content" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Escribe un comentario..." autoFocus={comment === 'true'} required></textarea>
			<FormCommentButton />
		</form>
	)
}