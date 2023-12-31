export default function Categories() {
	return (


		<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
			<li className="me-2">
				<a href="#" className="inline-block px-4 py-3 text-white bg-emerald-600 rounded-lg active" aria-current="page">Todo</a>
			</li>
			<li className="me-2">
				<a href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100">Personas</a>
			</li>
			<li className="me-2">
				<a href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100">Publicaciones</a>
			</li>
		</ul>

	)
}