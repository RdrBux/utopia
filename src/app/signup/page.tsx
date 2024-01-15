import Link from "next/link";
import Form from "../ui/form";
import Logo from "../ui/logo";
import CheckboxTerms from "../ui/signup/checkbox-terms";
import { redirect } from "next/navigation";
import { getPageSession } from "../lib/utils";

const Page = async () => {
	const session = await getPageSession();
	if (session) redirect("/");

	return (
		<div className="my-6 flex flex-col gap-6 items-center">
			<Logo />
			<div className="flex flex-col gap-6 bg-card">
				<h1 className="form-title">Crea una cuenta nueva</h1>
				<Form action="/api/signup">
					<div className="flex flex-col gap-6">
						<div>
							<label className="label" htmlFor="email">Correo electrónico</label>
							<input className="input" name="email" id="email" type="email" placeholder="nombre@correo.com" required />
						</div>
						<div className="flex gap-3">
							<div>
								<label className="label" htmlFor="firstname">Nombre</label>
								<input className="input" name="firstname" id="firstname" type="text" placeholder="ej: Juan" required />
							</div>
							<div>
								<label className="label" htmlFor="lastname">Apellido(s)</label>
								<input className="input" name="lastname" id="lastname" type="text" placeholder="ej: Pérez" required />
							</div>
						</div>
						<div>
							<label className="label" htmlFor="password">Contraseña</label>
							<input className="input" name="password" id="password" type="password" placeholder="••••••••" required />
						</div>
						<div>
							<label className="label" htmlFor="repeat-password">Repetir contraseña</label>
							<input className="input" name="repeat-password" id="repeat-password" type="password" placeholder="••••••••" required />
						</div>
						<div>
							<label className="label" htmlFor="date-of-birth">Fecha de nacimiento</label>
							<input className="input" name="date-of-birth" id="date-of-birth" type="date" required />
						</div>
						<CheckboxTerms />

						<button className="btn-primary" type="submit">Crear cuenta</button>
						<div className="text-sm text-gray-600">¿Ya tienes una cuenta? <Link className="text-blue-600 font-semibold hover:underline" href="/login">Inicia sesión</Link>.</div>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default Page;