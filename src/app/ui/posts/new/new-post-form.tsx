'use client'

import { Post } from "@/app/lib/definitions";
import Input from "../../input";
import InputFile from "../../input-file";
import { postContent } from "@/app/lib/actions";
import FormPostButton from "./form-post-button";
import { useFormState } from "react-dom";
import { useState } from "react";
import FormMacros from "./form-macros";

const initialState = {
	message: '',
	errors: {}
}

export default function NewPostForm({ type }: { type: Post['post_type'] }) {
	const [state, formAction] = useFormState(postContent, initialState)

	const [titleInput, setTitleInput] = useState('');
	const [contentInput, setContentInput] = useState('');

	const title = {
		general: 'Contenido general',
		food: 'Comida',
		workout: 'Actividad física',
	}

	function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length > 200) return
		setTitleInput(e.target.value)
	}

	function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		if (e.target.value.length > 2000) return
		setContentInput(e.target.value)
	}

	return (
		<div className="p-6">
			<h3 className="text-xl font-bold leading-none">{title[type]}</h3>

			<form action={formAction} className="mt-6 flex flex-col gap-6">

				<div className="">
					<label htmlFor="title" className="label flex justify-between">Título <span className={`${titleInput.length >= 200 ? 'text-red-500' : 'text-gray-500'}`}>({titleInput.length}/200)</span></label>
					<input value={titleInput} onChange={handleTitleChange} id="title" name="title" className="input" required />
				</div>

				<div className="">
					<label htmlFor="content" className="label flex justify-between">Descripción <span className={`${contentInput.length >= 2000 ? 'text-red-500' : 'text-gray-500'}`}>({contentInput.length}/2000)</span></label>
					<textarea value={contentInput} onChange={handleContentChange} id="content" name="content" className="input" rows={4}></textarea>
				</div>

				<InputFile id="img_url" label="Agregar imagen" />
				<input type="hidden" id="post_type" name="post_type" value={type} />
				<div>
					<label htmlFor="post_privacy" className="block mb-2 text-sm font-medium text-gray-900">Visibilidad</label>
					<select className="grid bg-gray-50 border w-fit border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:ring-2 outline-none p-2.5" name="post_privacy" id="post_privacy">
						<option className="" value="all">Todas las personas</option>
						<option className="" value="friends">Solo amigos</option>
						<option className="" value="me">Solo yo</option>
					</select>
				</div>

				{type === 'workout' && (
					<div className="w-36">
						<Input label="Duración (minutos)" id="workout-duration" type="number" min="0" defaultValue='0' />
					</div>
				)}

				{type === 'food' && <FormMacros />}

				{state?.message && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
					<span className="font-medium">Error:</span> {state?.message}

					<div className="mt-2">
						{
							state.errors && Object.values(state.errors).map((value) => {
								return <li key={value[0]}>{String(value)}</li>
							})
						}
					</div>
				</div>
				}
				<FormPostButton />
			</form>
		</div>
	)
}