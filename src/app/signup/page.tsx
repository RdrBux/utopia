import Logo from "../ui/logo";
import { redirect } from "next/navigation";
import { getUser } from "../lib/utils";
import SignupForm from "../ui/signup/signup-form";
import { robotoSlab } from "../ui/fonts";

const Page = async () => {
	const user = await getUser();
	if (user) redirect("/");

	return (
		<div className="my-6 px-4 flex flex-col gap-6 items-center">
			<Logo />
			<div className="flex flex-col gap-6 bg-card">
				<h1 className={`${robotoSlab.className} form-title`}>Crea una cuenta nueva</h1>
				<SignupForm />
			</div>
		</div>
	);
};

export default Page;