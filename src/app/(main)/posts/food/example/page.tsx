import { MacrosTable } from "@/app/ui/main/post-food";
import { CommentButton } from "@/app/ui/posts/comment-button";

export default function Home() {

	return (
		<div className="main-layout">
			<main className="flex flex-col gap-6 lg:col-start-2 bg-white py-6 rounded-lg border">
				<div className="flex gap-3 items-center px-6">
					<div className="h-8 w-8 shrink-0 bg-primary-300 rounded-full"></div>
					<div>
						<span className="font-bold">Juan Pérez</span>
						<span className="text-gray-500 text-sm ml-3">Hace 7 horas</span>
					</div>
				</div>

				<img className="" src="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="meal" />

				<div className="px-6 flex flex-col gap-6">
					<h4 className="text-xl font-bold leading-none">Ensalada</h4>
					<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet impedit ea suscipit perferendis vel quo. Veniam iste, sit ipsa numquam assumenda omnis veritatis corporis itaque atque tempora nesciunt corrupti!</p>
					<MacrosTable />

				</div>

				<div className="flex items-center justify-between px-6 -mb-3">
					<div className="flex gap-1 text-sm items-center font-semibold">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-primary-700">
							<path d="M2.09 15a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM5.765 13H4.09V8c.663 0 1.218-.466 1.556-1.037a4.02 4.02 0 0 1 1.358-1.377c.478-.292.907-.706.989-1.26V4.32a9.03 9.03 0 0 0 0-2.642c-.028-.194.048-.394.224-.479A2 2 0 0 1 11.09 3c0 .812-.08 1.605-.235 2.371a.521.521 0 0 0 .502.629h1.733c1.104 0 2.01.898 1.901 1.997a19.831 19.831 0 0 1-1.081 4.788c-.27.747-.998 1.215-1.793 1.215H9.414c-.215 0-.428-.035-.632-.103l-2.384-.794A2.002 2.002 0 0 0 5.765 13Z" />
						</svg>

						2
					</div>

					<div className="flex gap-1 text-sm items-center font-semibold">
						3
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-primary-700 w-4 h-4">
							<path d="M1 8.74c0 .983.713 1.825 1.69 1.943.764.092 1.534.164 2.31.216v2.351a.75.75 0 0 0 1.28.53l2.51-2.51c.182-.181.427-.286.684-.294a44.298 44.298 0 0 0 3.837-.293C14.287 10.565 15 9.723 15 8.74V4.26c0-.983-.713-1.825-1.69-1.943a44.447 44.447 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Z" />
						</svg>

					</div>

				</div>

				<div className="flex border-y divide-x text-gray-600">
					<button className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
						</svg>
						Me gusta
					</button>
					<CommentButton />
				</div>

				<div className="px-6 flex flex-col gap-3 divide-y -mt-6">

					<div className="py-6">
						<div className="flex gap-3 items-center">
							<div className="h-10 w-10 shrink-0 bg-primary-300 rounded-full"></div>
							<div>
								<span className="font-bold">Juan Pérez</span>
								<span className="text-gray-500 text-sm ml-3">Hace 7 horas</span>
							</div>
						</div>

						<p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quosasd. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos.</p>
					</div>

					<div className="py-6">
						<div className="flex gap-3 items-center">
							<div className="h-10 w-10 shrink-0 bg-primary-300 rounded-full"></div>
							<div>
								<span className="font-bold">Juan Pérez</span>
								<span className="text-gray-500 text-sm ml-3">Hace 7 horas</span>
							</div>
						</div>

						<p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos.</p>
					</div>

					<div className="py-6">
						<div className="flex gap-3 items-center">
							<div className="h-10 w-10 shrink-0 bg-primary-300 rounded-full"></div>
							<div>
								<span className="font-bold">Juan Pérez</span>
								<span className="text-gray-500 text-sm ml-3">Hace 7 horas</span>
							</div>
						</div>

						<p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos.</p>
					</div>

					<div className="flex gap-1 pt-6">
						<div className="h-10 w-10 shrink-0 bg-primary-300 rounded-full"></div>
						<textarea id="chat" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Escribe un comentario..."></textarea>
						<button type="submit" aria-label="Enivar mensaje" className="inline-flex justify-center p-2 text-primary-600 rounded-lg h-fit cursor-pointer hover:bg-primary-100">
							<svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
								<path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
							</svg>
						</button>
					</div>
				</div>



			</main>
		</div>
	)
}