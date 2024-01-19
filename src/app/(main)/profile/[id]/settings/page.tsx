import { getPageSession } from "@/app/lib/utils";
import SettingsContent from "@/app/ui/main/profile/settings/settings-content";
import SettingsTabs from "@/app/ui/main/profile/settings/settings-tabs";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { id: string } }) {
	const session = await getPageSession();
	if (!session) redirect('/login')

	if (session.user.userId !== params.id) redirect('/')

	return (
		<div className="my-6">
			<main className="bg-card md:flex max-w-3xl mx-auto">
				<SettingsTabs />

				<SettingsContent />
			</main>
		</div>
	)
}