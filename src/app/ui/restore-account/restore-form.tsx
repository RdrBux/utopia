import { Button } from "../buttons";
import Input from "../input";
import CheckboxTerms from "../signup/checkbox-terms";

export default function RestoreForm() {
	return (
		<form className="flex flex-col gap-6 bg-card">
			<h1 className="form-title">¿Has olvidado la contraseña?</h1>

			<p className="text-gray-500 max-w-md">¡No hay problema! Te enviaremos por correo electrónico las instrucciones para recuperar tu cuenta.</p>

			<Input label="Correo electrónico" id="email" type="email" placeholder="nombre@correo.com" />

			<CheckboxTerms />

			<Button>Recuperar contraseña</Button>

		</form>
	)
}