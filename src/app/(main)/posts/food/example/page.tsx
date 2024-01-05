import { MacrosTable } from "@/app/ui/main/post-food";

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

				<h2>Me gusta (2)</h2>
			</main>
		</div>
	)
}