'use client'

import { getNotificationsCount } from "@/app/lib/data"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

export default function NotificationsCounter() {
	const [notifsCount, setNotifsCount] = useState(0);
	const pathname = usePathname()

	useEffect(() => {
		async function fetchNotifsCount() {
			const count = await getNotificationsCount();
			setNotifsCount(count ?? 0);
		}

		fetchNotifsCount();
	}, [pathname])

	if (notifsCount > 0) {
		return (
			<div className="absolute -right-1 -top-1 bg-red-600 shadow text-white rounded-full font-semibold text-xs w-5 h-5 grid place-content-center">{notifsCount}</div>
		)
	} else {
		return null
	}
}