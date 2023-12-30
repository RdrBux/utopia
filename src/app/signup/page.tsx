import Logo from "../ui/logo";
import SignupForm from "../ui/signup/signup-form";

export default function Home() {
	return (
		<div className="my-8 flex flex-col gap-8 items-center">
			<Logo />
			<SignupForm />
		</div>
	)
}