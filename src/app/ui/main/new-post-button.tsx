import Link from "next/link";

export default function NewPostButton() {
	return (
		<Link href="/" type="button" className="w-fit h-fit fixed bottom-8 right-8 text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>

			<span className="sr-only">Icon description</span>
		</Link>
	)
}