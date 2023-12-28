export default function CardBackground({ children }: { children: React.ReactNode }) {
	return (
		<div className="p-8 rounded-lg shadow bg-white w-full">
			{children}
		</div>
	)
}