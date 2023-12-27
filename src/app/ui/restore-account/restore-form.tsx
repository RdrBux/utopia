import { Button } from "../buttons";
import CardBackground from "../card-background";
import FormTitle from "../form-title";
import Input from "../input";
import CheckboxTerms from "../signup/checkbox-terms";

export default function RestoreForm() {
	return (
		<CardBackground>
			<form className="flex flex-col gap-6">
				<FormTitle>¿Has olvidado la contraseña?</FormTitle>

				<p className="text-gray-600 max-w-md">¡No hay problema! Te enviaremos por correo electrónico las instrucciones para recuperar tu cuenta.</p>

				<Input label="Correo electrónico" id="email" type="email" placeholder="nombre@correo.com" />

				<CheckboxTerms />

				<Button>Recuperar contraseña</Button>

			</form>
		</CardBackground>
	)
}