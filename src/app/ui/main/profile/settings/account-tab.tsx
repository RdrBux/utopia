import RemoveAccountButton from "./remove-account-button";

export default function AccountTab() {

	return (
		<div className="flex flex-col gap-6">
			<h1 className="form-title">Cuenta</h1>
			<RemoveAccountButton />
		</div>
	)
}