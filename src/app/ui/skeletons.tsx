import { Spinner } from "./loading"

export function SkeletonRecommendedFriends() {
	return (
		<aside role='status' className="hidden lg:block bg-card h-fit pb-3">
			<h5 className="text-xl font-bold leading-none">Agregar amigos</h5>
			<ul className="mt-3 divide-y divide-gray-200 animate-pulse">
				<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
					<div className="h-8 w-8 shrink-0 bg-gray-200 rounded-full"></div>
					<div className="overflow-hidden">
						<div className="h-4 bg-gray-200 rounded w-20"></div>
						<div className="h-3 bg-gray-200 rounded w-full mt-1"></div>
					</div>
				</li>
				<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
					<div className="h-8 w-8 shrink-0 bg-gray-200 rounded-full"></div>
					<div className="overflow-hidden">
						<div className="h-4 bg-gray-200 rounded w-20"></div>
						<div className="h-3 bg-gray-200 rounded w-full mt-1"></div>
					</div>
				</li>
				<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
					<div className="h-8 w-8 shrink-0 bg-gray-200 rounded-full"></div>
					<div className="overflow-hidden">
						<div className="h-4 bg-gray-200 rounded w-20"></div>
						<div className="h-3 bg-gray-200 rounded w-full mt-1"></div>
					</div>
				</li>
				<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
					<div className="h-8 w-8 shrink-0 bg-gray-200 rounded-full"></div>
					<div className="overflow-hidden">
						<div className="h-4 bg-gray-200 rounded w-20"></div>
						<div className="h-3 bg-gray-200 rounded w-full mt-1"></div>
					</div>
				</li>
				<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
					<div className="h-8 w-8 shrink-0 bg-gray-200 rounded-full"></div>
					<div className="overflow-hidden">
						<div className="h-4 bg-gray-200 rounded w-20"></div>
						<div className="h-3 bg-gray-200 rounded w-full mt-1"></div>
					</div>
				</li>

			</ul>
		</aside>
	)
}

export function SkeletonLikeButton() {
	return (
		<button className='text-gray-600 hover:text-gray-900 px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100'>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
			</svg>
			Me gusta
		</button>
	)
}

export function SkeletonCommentButton() {
	return (
		<button className="px-5 py-2.5 font-bold flex gap-2 items-center justify-center w-full hover:bg-gray-100 duration-100 hover:text-gray-900">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
			</svg>
			Comentar
		</button>
	)
}

export function SkeletonPost() {
	return (
		<div role="status" className="border rounded-lg overflow-hidden bg-white animate-pulse">
			<div className="flex gap-3 items-center px-6 py-3 w-fit group">
				<div className="h-10 w-10 shrink-0 bg-gray-200 rounded-full"></div>
				<div className="shrink-0">
					<p className="h-4 w-40 rounded bg-gray-200"></p>
					<p className="mt-2 h-3 w-10 bg-gray-200 rounded"></p>
				</div>
			</div>

			<div className="w-full h-60 bg-gray-200"></div>

			<div className="px-6 flex flex-col gap-6 w-full py-6">
				<div className="w-1/2 h-5 rounded bg-gray-200"></div>
				<div className="w-full h-4 rounded bg-gray-200"></div>
				<div className="w-full h-4 rounded bg-gray-200 -mt-4"></div>
			</div>

			<div className="grid grid-cols-2 border-y divide-x text-gray-600 h-11">
				<SkeletonLikeButton />
				<SkeletonCommentButton />
			</div>
		</div>
	)
}

export function SkeletonPosts() {
	return (
		<section role="status" className="flex flex-col gap-6">
			<SkeletonPost />
			<SkeletonPost />
		</section>
	)
}

export function SkeletonButton() {
	return (
		<div role="status" className="w-40 h-11 rounded-lg border grid place-content-center animate-pulse">
			<div className="h-4 bg-gray-200 rounded w-24"></div>
		</div>
	)
}

export function SkeletonStatistics() {
	return (
		<div role="status" className="w-full h-48 grid place-content-center">
			<Spinner />
		</div>
	)
}