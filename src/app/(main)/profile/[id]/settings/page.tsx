import { getUserById } from "@/app/lib/data";
import { getPageSession } from "@/app/lib/utils";
import SettingsContent from "@/app/ui/main/profile/settings/settings-content";
import SettingsTabs from "@/app/ui/main/profile/settings/settings-tabs";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { id: string } }) {
	const session = await getPageSession();
	if (!session) redirect('/login')

	if (session.user.userId !== params.id) redirect('/')

	const userData = await getUserById(params.id);

	return (
		<div className="main-layout">
			<main className="bg-card lg:col-start-2 lg:flex">
				<SettingsTabs />

				<SettingsContent userData={userData} />
			</main>
		</div>
	)
}