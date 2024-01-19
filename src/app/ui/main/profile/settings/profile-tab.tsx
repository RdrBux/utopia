import { UserData } from "@/app/lib/definitions";
import InputFile from "@/app/ui/input-file";
import Textarea from "@/app/ui/textarea";

export default function ProfileTab({ userData }: { userData: UserData }) {
	const { firstname, lastname, img_url, bio } = userData;
	const name = `${firstname} ${lastname}`;
	const avatar = img_url && img_url?.length > 0 ? img_url : '/avatar.svg';

	return (
		<form className="flex flex-col gap-6">
			<h1 className="form-title">Perfil</h1>
			<div className="flex gap-3 flex-col">
				<p className="label">Foto de perfil</p>
				<img className="w-24 h-24 rounded-full" src={avatar} alt={name} />
				<InputFile id="profile_img" label="Subir imagen" />
			</div>

			<Textarea id="profile_bio" label="Biografia breve" defaultValue={bio} />

			<div className="flex gap-3 mt-6">
				<button className="btn-primary">Guardar cambios</button>
				<button className="btn-secondary">Cancelar</button>
			</div>
		</form>
	)
}