import Logo from "../ui/logo";
import LoginForm from "../ui/login/login-form";

export default function Home() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="grid grid-cols-2">
				<div className="h-full w-full flex shadow shadow-emerald-600 flex-col gap-4 justify-center bg-gradient-to-br from-emerald-700 to-emerald-600 rounded-l-lg p-8">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
						<h1 className="text-xl font-semibold text-white">Utopía</h1>
					</div>
					<h2 className="text-5xl text-white font-bold tracking-tight">Acá va un título</h2>
					<p className="text-white/80 max-w-[400px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil cum, quaerat rerum itaque quibusdam esse.</p>
				</div>
				<LoginForm />
			</div>
		</div>
	)
}