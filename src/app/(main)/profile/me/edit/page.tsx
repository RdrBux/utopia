import EditProfileForm from "@/app/ui/main/profile/edit/edit-profile-form";

export default function Home() {
	return (
		<div className="main-layout">
			<div className="lg:col-start-2 flex flex-col items-center">
				<EditProfileForm />
			</div>
		</div>
	)
}