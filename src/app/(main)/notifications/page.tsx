export default function Home() {
	return (
		<div className="main-layout">
			<div className=""></div>
			<div className="bg-card pb-3">
				<h1 className="form-title">Notificaciones</h1>

				<ul className="mt-3 divide-y divide-gray-200">
					<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
						<div className="h-16 w-16 shrink-0 bg-emerald-300 rounded-full"></div>
						<div className=""><b>Juan Pérez</b> a publicado nuevo contenido.</div>
					</li>

					<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
						<div className="h-16 w-16 shrink-0 bg-emerald-300 rounded-full"></div>
						<div className=""><b>Juan Pérez</b> a comentado tu publicación.</div>
					</li>

					<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
						<div className="h-16 w-16 shrink-0 bg-emerald-300 rounded-full"></div>
						<div className="text-gray-500"><b>Juan Pérez</b> le ha dado me gusta a tu publicación.</div>
					</li>

					<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
						<div className="h-16 w-16 shrink-0 bg-emerald-300 rounded-full"></div>
						<div className="text-gray-500">Tienes una nueva solicitud de amistad de <b>Juan Pérez</b>.</div>
					</li>

				</ul>
			</div>
		</div>
	)
}