import Link from 'next/link'

export default function NotFound() {
	return (
		<section className="bg-white min-h-screen">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">404</h1>
					<p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Página no encontrada.</p>
					<p className="mb-4 text-lg max-w-md mx-auto font-light text-gray-500">No hemos podido encontrar la página que buscas. Asegúrate de que no hayan errores en el enlace.</p>
					<Link href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Volver al inicio</Link>
				</div>
			</div>
		</section>
	)
}