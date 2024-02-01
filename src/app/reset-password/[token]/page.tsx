import { isExistingToken } from "@/app/lib/data";
import Logo from "@/app/ui/logo";
import ChangePasswordForm from "@/app/ui/restore-account/change-password-form";
import SignupForm from "@/app/ui/signup/signup-form";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { token: string } }) {
	const isToken = await isExistingToken(params.token);
	if (!isToken) {
		return redirect("/login");
	}

	return (
		<div className="my-6 px-4 flex flex-col gap-6 items-center">
			<Logo />
			<div className="flex flex-col gap-6 bg-card">
				<h1 className="form-title">Crea una contraseña nueva</h1>
				<ChangePasswordForm tokenId={params.token} />
			</div>
		</div>
	)
}