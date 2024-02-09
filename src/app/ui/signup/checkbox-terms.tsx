'use client'

import { useRef } from "react"
import { robotoSlab } from "../fonts";

export default function CheckboxTerms() {
	const dialog = useRef<HTMLDialogElement>(null);

	function handleClick() {
		dialog.current?.showModal();
	}

	return (
		<div>
			<div className="flex items-center">
				<input id="terms" name="terms" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" required />
				<label htmlFor="link-checkbox" className="ms-2 text-sm text-gray-600">He leído y acepto los <button type="button" onClick={handleClick} className="text-blue-600 font-semibold hover:underline ">términos y condiciones</button>.</label>
			</div>

			<dialog ref={dialog} className="rounded-lg">
				<div className="bg-card flex flex-col gap-3 min-w-80 max-w-3xl max-h-[80vh] overflow-scroll">
					<button onClick={() => dialog.current?.close()} aria-label="Cancelar" className="text-gray-400 absolute top-2.5 right-5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
						<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</button>

					<h4 className={`${robotoSlab.className} text-lg font-semibold text-gray-900 text-center`}>Términos y Condiciones de Utopía</h4>

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
			</dialog>
		</div>
	)
}