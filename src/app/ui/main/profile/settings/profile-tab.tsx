'use client'

import { updateProfile } from "@/app/lib/actions";
import { UserData } from "@/app/lib/definitions";
import InputFile from "@/app/ui/input-file";
import Textarea from "@/app/ui/textarea";
import Link from "next/link";
import TextareaBio from "./textarea-bio";

export default function ProfileTab({ userData }: { userData: UserData }) {
	const { id, firstname, lastname, img_url, bio } = userData;
	const name = `${firstname} ${lastname}`;
	const avatar = img_url && img_url?.length > 0 ? img_url : '/avatar.svg';

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		updateProfile(new FormData(event.currentTarget));
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6">
			<h1 className="form-title">Perfil</h1>
			<div className="flex gap-3 flex-col">
				<p className="label">Foto de perfil</p>
				<img className="w-24 h-24 rounded-full" src={avatar} alt={name} />
				<InputFile id="profile_img" label="Subir imagen" />
			</div>

			<TextareaBio text={String(bio)} />

			<div className="flex gap-3 mt-6">
				<button className="btn-primary">Guardar cambios</button>
				<Link href={`/profile/${id}`} className="btn-secondary">Cancelar</Link>
			</div>
		</form>
	)
}