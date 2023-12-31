import Link from "next/link";
import Logo from "../logo";
import Navtab from "./navtab";

export default function Navbar() {
	return (
		<nav className="bg-white border-b sticky top-0">
			<div className="flex justify-between items-center container mx-auto px-2">
				<div className="py-3"><Logo /></div>

				<Navtab />

				<div className="flex items-center gap-2 text-gray-500">
					<Link href="/search" className="h-10 w-10 grid place-content-center bg-gray-100 rounded-full hover:text-gray-900">
						<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
						</svg>
					</Link>

					<Link href="/" className="h-10 w-10 grid place-content-center bg-gray-100 rounded-full hover:text-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
						</svg>
					</Link>

					<Link href='/' className="h-10 w-10 rounded-full bg-gray-100">
						<img className="rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile picture" />
					</Link>
				</div>

			</div>
		</nav>
	)
}