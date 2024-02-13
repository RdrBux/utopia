import { Metadata } from "next";
import Logo from "../ui/logo";
import RestoreForm from "../ui/restore-account/restore-form";

export const metadata: Metadata = {
	title: 'Recuperar cuenta',
}

export default function Home() {
	return (
		<div className="mx-auto my-6 px-4 container flex flex-col gap-6 items-center">
			<Logo />
			<RestoreForm />
		</div>
	)
}