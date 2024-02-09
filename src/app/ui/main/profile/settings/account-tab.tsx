import { robotoSlab } from "@/app/ui/fonts";
import RemoveAccountButton from "./remove-account-button";

export default function AccountTab() {

	return (
		<div className="flex flex-col gap-6">
			<h1 className={`${robotoSlab.className} form-title`}>Cuenta</h1>
			<RemoveAccountButton />
		</div>
	)
}