export default function CardBackground({ children }: { children: React.ReactNode }) {
	return (
		<div className="p-8 rounded-lg shadow-lg bg-white w-fit">
			{children}
		</div>
	)
}