'use client'

import { updateProfile } from "@/app/lib/actions";
import { UserData } from "@/app/lib/definitions";
import TextareaBio from "./textarea-bio";
import FormSettingsButtons from "./form-settings-buttons";
import InputAvatar from "./input-avatar";

export default function ProfileTab({ userData }: { userData: UserData }) {
	const { id, firstname, lastname, img_url, bio } = userData;
	const avatar = img_url && img_url?.length > 0 ? img_url : '/avatar.svg';

	return (
		<form action={updateProfile} className="flex flex-col gap-6">
			<h1 className="form-title">Perfil</h1>
			<div className="flex gap-3 flex-col">
				<p className="label">Foto de perfil</p>
				<InputAvatar avatar={avatar} />
			</div>

			<TextareaBio text={bio ?? ''} />

			<FormSettingsButtons id={id} />
		</form>
	)
}