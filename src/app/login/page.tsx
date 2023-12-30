import Logo from "../ui/logo";
import LoginForm from "../ui/login/login-form";

export default function Home() {
	return (
		<div className="flex flex-col my-6 items-center justify-center gap-6">
			<Logo />
			<LoginForm />
		</div>
	)
}