import Logo from "../ui/logo";
import RestoreForm from "../ui/restore-account/restore-form";

export default function Home() {
	return (
		<div className="mx-auto my-8 container flex flex-col gap-8 items-center">
			<Logo />
			<RestoreForm />
		</div>
	)
}