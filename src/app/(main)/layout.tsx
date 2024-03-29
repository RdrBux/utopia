import Navbar from "../ui/main/navbar";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Navbar />
			<div className="container mx-auto px-4">{children}</div>
		</div>
	)
}