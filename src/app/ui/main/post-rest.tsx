import Link from "next/link";

export default function PostRest() {
	return (
		<div className="border rounded-lg overflow-hidden bg-white">
			<Link href="/posts/rest/example" className="flex flex-col gap-6 py-6">
				<div className="flex gap-3 items-center px-6">
					<div className="h-8 w-8 shrink-0 bg-primary-300 rounded-full"></div>
					<div>
						<span className="font-bold">Juan Pérez</span>
						<span className="text-gray-500 text-sm ml-3">Hace 7 horas</span>
					</div>
				</div>

				<img className="w-full h-40 object-cover" src="https://m.media-amazon.com/images/I/41USNO2EK1L._UXNaN_FMjpg_QL85_.jpg" alt="descanso" />

				<div className="px-6 flex flex-col gap-6">
					<h4 className="text-xl font-bold leading-none">Descanso 9/1/2024 - 10/1/2024</h4>
					<p><b>Duración:</b> 8:30 horas.</p>
				</div>

			</Link>

		</div>
	)
}