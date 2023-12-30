import Link from "next/link";

export default function Logo() {
	return (
		<Link href='/' className="flex items-center gap-2">
			<div className="w-10 h-10 bg-emerald-500 rounded-full">
			</div><div className="text-xl font-semibold">Utopía</div>
		</Link>
	)
}