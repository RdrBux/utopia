'use client'

import { useSearchParams } from "next/navigation"
import ProfileTab from "./profile-tab";
import { UserData } from "@/app/lib/definitions";
import PrivacyTab from "./privacy-tab";
import PasswordTab from "./password-tab";
import AccountTab from "./account-tab";

export default function SettingsContent({ userData }: { userData: UserData }) {
	const searchParams = useSearchParams()
	const tab = searchParams.get('tab');

	return (
		<div className="lg:pl-6 w-full">
			{
				(tab === 'profile' || tab === null) && (
					<ProfileTab userData={userData} />
				)
			}

			{
				tab === 'privacy' && (
					<PrivacyTab />
				)
			}

			{
				tab === 'password' && (
					<PasswordTab />
				)
			}

			{
				tab === 'account' && (
					<AccountTab />
				)
			}
		</div>
	)
}