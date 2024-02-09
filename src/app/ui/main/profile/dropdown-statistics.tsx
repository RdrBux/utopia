'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export type PeriodType = 'today' | 'week' | 'month' | 'all';

export default function DropdownStatistics() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	let periodUrl = searchParams.get('period') ?? 'month';

	const { replace } = useRouter();

	const [showMenu, setShowMenu] = useState(false)
	const [period, setPeriod] = useState<PeriodType>(periodUrl as PeriodType)


	const menu = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (menu.current && !menu.current.contains(e.target as HTMLElement)) {
				setShowMenu(false);
			}
		}

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, [menu, showMenu])

	function handleClick(period: PeriodType) {
		setPeriod(period);
		replace(`${pathname}?period=${period}`, { scroll: false });
		setShowMenu(false);
	}

	const value = {
		today: 'Hoy',
		week: '7 días',
		month: '30 días',
		all: 'Mostrar todo'
	}

	return (
		<div className="relative">
			<button onClick={() => setShowMenu(prev => !prev)} aria-label="Abrir menu del periodo" className="border bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
				{value[period]}
				<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
				</svg>
			</button>

			<div ref={menu} className={`${showMenu ? 'block' : 'hidden'} z-10 absolute right-0 top-10 bg-white divide-y divide-gray-100 rounded-lg border shadow w-32`}>
				<div className="px-4 py-3 text-sm text-gray-900">
					<div className="font-medium">Periodo</div>
				</div>
				<ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconButton">
					<li>
						<button onClick={() => handleClick('today')} className={`${period === 'today' ? 'font-semibold' : ''} w-full px-4 py-2 hover:bg-gray-100 flex gap-3 items-center`}>
							{value.today}
						</button>
					</li>
					<li>
						<button onClick={() => handleClick('week')} className={`${period === 'week' ? 'font-semibold' : ''} w-full px-4 py-2 hover:bg-gray-100 flex gap-3 items-center`}>
							{value.week}
						</button>
					</li>
					<li>
						<button onClick={() => handleClick('month')} className={`${period === 'month' ? 'font-semibold' : ''} w-full px-4 py-2 hover:bg-gray-100 flex gap-3 items-center`}>
							{value.month}
						</button>
					</li>
					<li>
						<button onClick={() => handleClick('all')} className={`${period === 'all' ? 'font-semibold' : ''} w-full px-4 py-2 hover:bg-gray-100 flex gap-3 items-center`}>
							{value.all}
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
