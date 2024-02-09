import { robotoSlab } from "../ui/fonts";
import Logo from "../ui/logo";

export default function Home() {
	return (
		<main className="rounded-lg">
			<div className="bg-card flex flex-col gap-3 min-w-80 max-w-3xl mx-auto p-6 my-6">

				<div className="flex justify-center"><Logo /></div>

				<h1 className={`${robotoSlab.className} text-2xl font-semibold text-gray-900 text-center my-6`}>Términos y Condiciones</h1>

				<p className="text-gray-600">Bienvenido a Utopía, la red social que te conecta con tus amigos y te ayuda a llevar un estilo de vida saludable. Antes de unirte a nuestra comunidad, te pedimos que leas y comprendas nuestros términos y condiciones. Al registrarte en Utopía, aceptas estar sujeto a los siguientes términos:</p>

				<h5 className="font-semibold">1. Creación de Cuenta:</h5>
				<ul className="list-disc list-inside text-gray-600">
					<li>Debes ser mayor de 13 años para utilizar Utopía.</li>
					<li>Debes proporcionar información precisa y actualizada al crear tu cuenta.</li>
				</ul>

				<h5 className="font-semibold">2. Responsabilidad del Usuario:</h5>
				<ul className="list-disc list-inside text-gray-600">
					<li>Eres responsable de la información que compartes en Utopía.</li>
					<li>No publiques contenido ofensivo, difamatorio o ilegal.</li>
					<li>Respeta la privacidad de los demás usuarios.</li>
				</ul>

				<h5 className="font-semibold">3. Privacidad y Seguridad:</h5>
				<ul className="list-disc list-inside text-gray-600">
					<li>Mantenemos la privacidad de tus datos personales según estrictas normas de privacidad.</li>
					<li>Utopía no compartirá información de los usuarios fuera de la plataforma.</li>
					<li>No compartas información confidencial en la plataforma.</li>
				</ul>

				<h5 className="font-semibold">4. Propiedad Intelectual:</h5>
				<ul className="list-disc list-inside text-gray-600">
					<li>Respetamos los derechos de propiedad intelectual. No publiques contenido protegido sin permiso.</li>
				</ul>

				<h5 className="font-semibold">5. Modificación de Términos:</h5>
				<ul className="list-disc list-inside text-gray-600">
					<li>Nos reservamos el derecho de modificar estos términos. Te notificaremos sobre cambios significativos.</li>
				</ul>

				<h5 className="font-semibold">6. Terminación de Cuenta:</h5>
				<ul className="list-disc list-inside text-gray-600">
					<li>Nos reservamos el derecho de suspender o cerrar cuentas que violen estos términos.</li>
				</ul>

				<p className="text-gray-600">Al registrarte en Utopía, aceptas cumplir con estos términos y condiciones. Te animamos a revisar nuestras políticas de privacidad y cookies para obtener más detalles sobre cómo manejamos tus datos. <br />¡Gracias por unirte a Utopía!</p>
			</div>
		</main>
	)
}