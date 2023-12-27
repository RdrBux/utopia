import Logo from "../ui/logo";
import SignupForm from "../ui/signup/signup-form";

export default function Home() {
	return (
		<div className="mx-auto my-8 container flex flex-col gap-8 items-center">
			<Logo />
			<SignupForm />
		</div>
	)
}