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
		<div role="status" className="h-full w-full grid place-content-center">
			<div className="w-24 h-5 rounded animate-pulse bg-gray-200"></div>
		</div>
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
				<SkeletonLikeButton />
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