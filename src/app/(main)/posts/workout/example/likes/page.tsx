export default function Home() {
	return (
		<div className="main-layout">
			<main className="flex flex-col gap-6 bg-card pb-3 lg:col-start-2">
				<h2 className="form-title">Me gusta</h2>

				<ul className="divide-y divide-gray-200">
					<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
						<div className="h-16 w-16 shrink-0 bg-primary-300 rounded-full"></div>
						<div className="overflow-hidden">
							<div className="font-medium">Juan Pérez</div>
							<div className="text-sm text-gray-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum eligendi ratione nihil similique! Eum dignissimos aliquid doloremque praesentium perferendis repellat soluta ab reprehenderit odit cupiditate iusto, quidem, tempora qui!</div>
						</div>
					</li>

					<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
						<div className="h-16 w-16 shrink-0 bg-primary-300 rounded-full"></div>
						<div className="overflow-hidden">
							<div className="font-medium">Juan Pérez</div>
							<div className="text-sm text-gray-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum eligendi ratione nihil similique! Eum dignissimos aliquid doloremque praesentium perferendis repellat soluta ab reprehenderit odit cupiditate iusto, quidem, tempora qui!</div>
						</div>
					</li>

				</ul>
			</main>
		</div>
	)
}