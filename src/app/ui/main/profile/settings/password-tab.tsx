import Input from "@/app/ui/input";

export default function PasswordTab() {
	return (
		<form className="flex flex-col gap-6">
			<h1 className="form-title">Cambiar contraseña</h1>

			<Input id="password" label="Contraseña actual" type="password" placeholder="••••••••" />
			<Input id="new-password" label="Nueva contraseña" type="password" placeholder="••••••••" />
			<Input id="new-password-repeat" label="Repetir nueva contraseña" type="password" placeholder="••••••••" />

			<div className="flex gap-3 mt-6">
				<button className="btn-primary">Guardar cambios</button>
				<button className="btn-secondary">Cancelar</button>
			</div>
		</form>
	)
}