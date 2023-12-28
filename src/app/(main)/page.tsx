import CardBackground from "../ui/card-background";

export default function Home() {
	return (
		<div className="grid grid-cols-[1fr_2fr_1fr] gap-8 my-8">
			<aside>
				<CardBackground>
					<div className="flex flex-col gap-6">
						<img className="rounded-full self-center w-24 h-24" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile picture" />
						<div className="text-center">
							<h5 className="mb-1 text-xl font-medium">Bonnie Green</h5>
							<div className="text-sm text-gray-500">Visual Designer</div>
						</div>
						<h5 className="text-xl font-bold leading-none">Progreso esta semana</h5>
						<div className="p-4 rounded-lg bg-red-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam ut quod quo aperiam eaque maiores quidem eveniet a, libero odit non repellendus dignissimos debitis sit illum. Animi, architecto at!</div>
					</div>
				</CardBackground>
			</aside>
			<main>
				<CardBackground>
					<div className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum accusantium temporibus cum itaque explicabo, corrupti officia velit minima dicta harum consequatur! Doloremque nemo at temporibus aliquid illum, quisquam tenetur?</div>
				</CardBackground>
			</main>
			<aside>
				<CardBackground>
					<h5 className="text-xl font-bold leading-none">Agregar amigos</h5>
					<ul className="mt-8 divide-y divide-gray-200">
						<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
							<div className="h-8 w-8 shrink-0 bg-emerald-300 rounded-full"></div>
							<div className="overflow-hidden">
								<div className="font-medium text-sm">Bonnie Green</div>
								<div className="text-xs text-gray-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum eligendi ratione nihil similique! Eum dignissimos aliquid doloremque praesentium perferendis repellat soluta ab reprehenderit odit cupiditate iusto, quidem, tempora qui!</div>
							</div>
						</li>

						<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
							<div className="h-8 w-8 shrink-0 bg-emerald-300 rounded-full"></div>
							<div className="overflow-hidden">
								<div className="font-medium text-sm">Bonnie Green</div>
								<div className="text-xs text-gray-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum eligendi ratione nihil similique! Eum dignissimos aliquid doloremque praesentium perferendis repellat soluta ab reprehenderit odit cupiditate iusto, quidem, tempora qui!</div>
							</div>
						</li>

						<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
							<div className="h-8 w-8 shrink-0 bg-emerald-300 rounded-full"></div>
							<div className="overflow-hidden">
								<div className="font-medium text-sm">Bonnie Green</div>
								<div className="text-xs text-gray-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum eligendi ratione nihil similique! Eum dignissimos aliquid doloremque praesentium perferendis repellat soluta ab reprehenderit odit cupiditate iusto, quidem, tempora qui!</div>
							</div>
						</li>

						<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
							<div className="h-8 w-8 shrink-0 bg-emerald-300 rounded-full"></div>
							<div className="overflow-hidden">
								<div className="font-medium text-sm">Bonnie Green</div>
								<div className="text-xs text-gray-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum eligendi ratione nihil similique! Eum dignissimos aliquid doloremque praesentium perferendis repellat soluta ab reprehenderit odit cupiditate iusto, quidem, tempora qui!</div>
							</div>
						</li>

						<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
							<div className="h-8 w-8 shrink-0 bg-emerald-300 rounded-full"></div>
							<div className="overflow-hidden">
								<div className="font-medium text-sm">Bonnie Green</div>
								<div className="text-xs text-gray-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum eligendi ratione nihil similique! Eum dignissimos aliquid doloremque praesentium perferendis repellat soluta ab reprehenderit odit cupiditate iusto, quidem, tempora qui!</div>
							</div>
						</li>
					</ul>
				</CardBackground>
			</aside>
		</div>
	)
}