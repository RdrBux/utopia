export default function FriendRequests() {
	return (
		<aside className="bg-card h-fit pb-3">
			<h5 className="text-xl font-bold leading-none">Solicitudes de amistad</h5>
			<ul className="mt-3 divide-y divide-gray-200">
				<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
					<div className="h-8 w-8 shrink-0 bg-primary-300 rounded-full"></div>
					<div className="overflow-hidden">
						<div className="font-medium text-sm">Juan Pérez</div>
						<div className="text-xs text-gray-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum eligendi ratione nihil similique! Eum dignissimos aliquid doloremque praesentium perferendis repellat soluta ab reprehenderit odit cupiditate iusto, quidem, tempora qui!</div>
					</div>
				</li>

				<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
					<div className="h-8 w-8 shrink-0 bg-primary-300 rounded-full"></div>
					<div className="overflow-hidden">
						<div className="font-medium text-sm">Juan Pérez</div>
						<div className="text-xs text-gray-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum eligendi ratione nihil similique! Eum dignissimos aliquid doloremque praesentium perferendis repellat soluta ab reprehenderit odit cupiditate iusto, quidem, tempora qui!</div>
					</div>
				</li>
			</ul>
		</aside>
	)
}