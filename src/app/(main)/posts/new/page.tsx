import FormFood from "@/app/ui/posts/new/form-food";

export default function Home() {
	return (
		<div className="main-layout">
			<main className="bg-card p-0 lg:col-start-2">
				<h1 className="form-title p-6">Crear publicación</h1>
				<div className="flex border-y divide-x text-gray-600">
					<button className="text-gray-900 bg-gray-100 px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
						<svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.18 207">
							<path d="M130.1,70.91,160.54,0l19.57,8.35L154.26,68.86c4.38,1.88,8.21,4.25,12.33,5,2.15.39,5.62-1.43,7.11-3.33,10.59-13.41,20.36-27.11,30.84-40.65l17,12.66-20,26.84c22.26,6.71,36,26.12,31.95,49.51-3.82,23.71-12.26,45.27-28.81,63.09-15.44,16.62-34.5,25.06-57.31,24.92-19.84-.11-39.68-.21-59.51,0C35.64,209.14-.12,157.28,0,109,.12,84.94,20.93,66.67,45,68.31c4.61.32,9.16,1.61,13.77,2.15,1.62.19,3.8.05,5-.89C82.59,54.12,108.68,52.37,130.1,70.91ZM21.2,110.51H212.86c-.51-15.84-18.07-26.09-31.73-18.12-5.22,2.81-10.07,6.29-15.47,9.7-12-16.37-25.8-15.51-40.35-3.3-18.65-28-39.8-25.72-59.65-.37C50.11,84.37,21.85,86.25,21.2,110.51Z" fill="currentColor" />
						</svg>
						Comida
					</button>
					<button className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
						<svg className="w-4 h-4 text-amber-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.97 211.18">
							<path d="M84.05,196.77,13.71,127.31c7.16-6.88,14.21-13.66,21.51-20.66L63.75,134.5l71.9-71.91c-9.34-9.16-19.15-18.78-28.61-28L127.1,13.67C150.78,37,174.33,60.27,197.45,83.1L176.52,104l-27.34-28-72,72,27.75,27.86Z" />
							<path d="M150,15.47c4.81-4.87,10-10.19,14.94-15.13l46.63,46.72L196.3,63Z" />
							<path d="M15.54,148.56c15.32,15.75,30.73,31.57,45.86,47.11L46.31,210.85.05,164.46Z" />
							<path d="M0,199.18c2.84-2.86,5.83-5.88,9.2-9.26l10.4,12-7.78,9.24Z" />
							<path d="M191.84,9.22,200.59,0,212,11.71,202.53,21Z" />
						</svg>
						Actividad física
					</button>
					<button className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
						<svg className="w-4 h-4 text-violet-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.22 169.83">
							<path d="M20.87,84.63H47.34c-12.93-7-17.56-15.36-14.88-26.41a21.27,21.27,0,0,1,41.42.66c2.5,10.41-2.52,19.11-15.17,25.8,1.18.08,1.95.16,2.72.17,7.65,0,15.3,0,23.77,0,0-3.5-.06-6.75,0-10,.25-13.14,9-21.93,22.06-22q41.73-.09,83.46,0c12.68,0,22.13,8.28,22.28,20.75.38,31.48.13,63,.11,94.45a7.3,7.3,0,0,1-.48,1.7H191.85V149.16H21.13v20.67H0V0H20.87Z" />
						</svg>
						Descanso
					</button>
				</div>

				<FormFood />
			</main>
		</div>
	)
}