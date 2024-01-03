import Input from "@/app/ui/input";
import Link from "next/link";

export default function EditProfileForm() {
	return (
		<form className="flex flex-col gap-6 bg-card w-fit">
			<h1 className="form-title">Editar perfil</h1>

			<div className="">
				<label className="block mb-2 text-sm font-medium cursor-pointer text-gray-900" htmlFor="file_input">Foto de perfil
					<img className="rounded-full w-40 h-40 shrink-0 mx-auto my-6" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile picture" />
				</label>
				<input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="file_input" type="file" />
			</div>

			<Input label="Biografía breve (0/48 caracteres)" id="bio" />

			<Input label="Correo electrónico" id="email" type="email" placeholder="nombre@correo.com" />
			<div className="flex gap-3">
				<Input label="Nombre" id="firstname" placeholder="ej: Juan" />
				<Input label="Apellido(s)" id="lastname" placeholder="ej: Pérez" />
			</div>

			<Link className="text-sm text-blue-600 font-semibold hover:underline" href="/">Cambiar contraseña.</Link>

			<div className="grid grid-cols-2 gap-3">
				<button className="btn-primary">Guardar cambios</button>
				<Link href="/profile/me" className="btn-secondary">Cancelar</Link>
			</div>
		</form>
	)
}