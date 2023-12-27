export default function H1({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">{children}</h1>
	)
}