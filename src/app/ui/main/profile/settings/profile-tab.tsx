'use client'

import { updateProfile } from "@/app/lib/actions";
import { UserData } from "@/app/lib/definitions";
import TextareaBio from "./textarea-bio";
import FormSettingsButtons from "./form-settings-buttons";
import InputAvatar from "./input-avatar";
import { robotoSlab } from "@/app/ui/fonts";

export default function ProfileTab({ userData }: { userData: UserData }) {
	const { id, firstname, lastname, img_url, bio } = userData;
	const avatar = img_url && img_url?.length > 0 ? img_url : '/avatar.svg';

	return (
		<form action={updateProfile} className="flex flex-col gap-6">
			<h1 className={`${robotoSlab.className} form-title`}>Perfil</h1>
			<div className="flex gap-3 flex-col">
				<p className="label flex justify-between">Foto de perfil <span className="text-gray-500 font-normal">(máximo 4.5 MB)</span></p>
				<InputAvatar avatar={avatar} />
			</div>

			<TextareaBio text={bio ?? ''} />

			<FormSettingsButtons id={id} />
		</form>
	)
}