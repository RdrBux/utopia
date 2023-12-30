import Logo from "../ui/logo";
import SignupForm from "../ui/signup/signup-form";

export default function Home() {
	return (
		<div className="my-6 flex flex-col gap-6 items-center">
			<Logo />
			<SignupForm />
		</div>
	)
}