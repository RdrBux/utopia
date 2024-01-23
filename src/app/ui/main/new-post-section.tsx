import { getUserData } from "@/app/lib/data";
import Link from "next/link";

export default async function NewPostSection() {
	const userData = await getUserData();
	if (!userData) return;
	const avatar = userData.img_url && userData.img_url.length > 0 ? userData?.img_url : '/avatar.svg';
	const name = `${userData.firstname} ${userData.lastname}`

	return (
		<div className="bg-card p-0 divide-y">
			<div className="flex items-center gap-3 px-6 py-3">
				<img className="h-10 w-10 shrink-0 rounded-full" src={avatar} alt={name} />
				<Link href='/posts/new' className="bg-gray-50 text-gray-400 text-left border border-gray-300 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 focus:ring-2 focus:border-primary-500 outline-none">
					Agregar contenido...
				</Link>
			</div>
			<div className="flex border-t divide-x text-gray-600">
				<Link href="/posts/new?type=general" className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-blue-600">
						<path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
						<path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
					</svg>
					General
				</Link>
				<Link href="/posts/new?type=food" className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
					<svg className="w-4 h-4 text-emerald-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.18 207">
						<path d="M130.1,70.91,160.54,0l19.57,8.35L154.26,68.86c4.38,1.88,8.21,4.25,12.33,5,2.15.39,5.62-1.43,7.11-3.33,10.59-13.41,20.36-27.11,30.84-40.65l17,12.66-20,26.84c22.26,6.71,36,26.12,31.95,49.51-3.82,23.71-12.26,45.27-28.81,63.09-15.44,16.62-34.5,25.06-57.31,24.92-19.84-.11-39.68-.21-59.51,0C35.64,209.14-.12,157.28,0,109,.12,84.94,20.93,66.67,45,68.31c4.61.32,9.16,1.61,13.77,2.15,1.62.19,3.8.05,5-.89C82.59,54.12,108.68,52.37,130.1,70.91ZM21.2,110.51H212.86c-.51-15.84-18.07-26.09-31.73-18.12-5.22,2.81-10.07,6.29-15.47,9.7-12-16.37-25.8-15.51-40.35-3.3-18.65-28-39.8-25.72-59.65-.37C50.11,84.37,21.85,86.25,21.2,110.51Z" fill="currentColor" />
					</svg>
					Comida
				</Link>
				<Link href="/posts/new?type=workout" className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
					<svg className="w-4 h-4 text-amber-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.97 211.18">
						<path d="M84.05,196.77,13.71,127.31c7.16-6.88,14.21-13.66,21.51-20.66L63.75,134.5l71.9-71.91c-9.34-9.16-19.15-18.78-28.61-28L127.1,13.67C150.78,37,174.33,60.27,197.45,83.1L176.52,104l-27.34-28-72,72,27.75,27.86Z" />
						<path d="M150,15.47c4.81-4.87,10-10.19,14.94-15.13l46.63,46.72L196.3,63Z" />
						<path d="M15.54,148.56c15.32,15.75,30.73,31.57,45.86,47.11L46.31,210.85.05,164.46Z" />
						<path d="M0,199.18c2.84-2.86,5.83-5.88,9.2-9.26l10.4,12-7.78,9.24Z" />
						<path d="M191.84,9.22,200.59,0,212,11.71,202.53,21Z" />
					</svg>
					Actividad física
				</Link>
			</div>
		</div>
	)
}