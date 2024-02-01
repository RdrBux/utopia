'use client'

import { useRef } from "react"

export default function RemoveAccountButton() {
	const dialog = useRef<HTMLDialogElement>(null);

	function handleClick() {
		dialog.current?.showModal();
	}

	function handleDelete() {
		/* deleteAccount(); */
	}

	return (
		<div>
			<button onClick={handleClick} aria-label="Eliminar cuenta" title="Eliminar cuenta" className="btn-red w-fit flex gap-3 items-center">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
					<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
				</svg>
				Eliminar cuenta
			</button>

			<dialog ref={dialog} className="rounded-lg">
				<div className="bg-card flex flex-col items-center gap-1 min-w-80">
					<button onClick={() => dialog.current?.close()} aria-label="Cancelar" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
						<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</button>

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-400">
						<path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
					</svg>



					<h4 className="text-lg font-semibold px-6 text-gray-900">¿Deseas eliminar su cuenta?</h4>
					<p className="text-gray-500 px-6">Esta operación no se puede deshacer</p>
					<div className="flex gap-3 mt-5">
						<button onClick={() => dialog.current?.close()} className="btn-secondary w-fit">Cancelar</button>
						<button onClick={handleDelete} className="btn-red w-fit">Sí, confirmar</button>
					</div>

				</div>
			</dialog>
		</div>
	)
}