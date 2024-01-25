import { getNotifications } from "@/app/lib/data";
import Link from "next/link";

export default async function Home() {
	const notifications = await getNotifications();
	if (!notifications || notifications.length === 0) {
		return (
			<div className="main-layout">
				<div className="bg-card lg:col-start-2 flex flex-col items-center gap-6">
					<h1 className="form-title text-center">No tienes notificaciones</h1>
					<Link href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Volver al inicio</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="main-layout">
			<div className="bg-card pb-3 lg:col-start-2">
				<h1 className="form-title">Notificaciones</h1>

				<ul className="mt-3 divide-y divide-gray-200">

					{
						notifications.map((notification) => {

							if (notification.notification_type === 'friend_request') {
								return (
									<li key={notification.id}>
										<Link href={`/profile/${notification.sender_id}`} className={`${notification.is_read ? 'opacity-50' : ''} grid grid-cols-[auto_1fr] gap-3 py-3 items-center`}>
											<img src={notification.img_url || '/avatar.svg'} alt={`${notification.firstname} ${notification.lastname}`} className="h-16 w-16 shrink-0 rounded-full" />
											<div>Tienes una nueva solicitud de amistad de <b>{notification.firstname} {notification.lastname}</b>.</div>
										</Link>
									</li>
								)
							}

							if (notification.notification_type === 'friend_accepted') {
								return (
									<li key={notification.id}>
										<Link href={`/profile/${notification.sender_id}`} className={`${notification.is_read ? 'opacity-50' : ''} grid grid-cols-[auto_1fr] gap-3 py-3 items-center`}>
											<img src={notification.img_url || '/avatar.svg'} alt={`${notification.firstname} ${notification.lastname}`} className="h-16 w-16 shrink-0 rounded-full" />
											<div><b>{notification.firstname} {notification.lastname}</b> ha aceptado tu solicitud de amistad.</div>
										</Link>
									</li>
								)
							}

							if (notification.notification_type === 'post_like') {
								return (
									<li key={notification.id}>
										<Link href={`/posts/${notification.post_id}`} className={`${notification.is_read ? 'opacity-50' : ''} grid grid-cols-[auto_1fr] gap-3 py-3 items-center`}>
											<img src={notification.img_url || '/avatar.svg'} alt={`${notification.firstname} ${notification.lastname}`} className="h-16 w-16 shrink-0 rounded-full" />
											<div>A <b>{notification.firstname} {notification.lastname}</b> le ha gustado tu publicación.</div>
										</Link>
									</li>
								)
							}

							if (notification.notification_type === 'post_comment') {
								return (
									<li key={notification.id}>
										<Link href={`/posts/${notification.post_id}`} className={`${notification.is_read ? 'opacity-50' : ''} grid grid-cols-[auto_1fr] gap-3 py-3 items-center`}>
											<img src={notification.img_url || '/avatar.svg'} alt={`${notification.firstname} ${notification.lastname}`} className="h-16 w-16 shrink-0 rounded-full" />
											<div><b>{notification.firstname} {notification.lastname}</b> ha comentado tu publicación.</div>
										</Link>
									</li>
								)
							}

							if (notification.notification_type === 'friend_new_content') {
								return (
									<li key={notification.id}>
										<Link href={`/posts/${notification.post_id}`} className={`${notification.is_read ? 'opacity-50' : ''} grid grid-cols-[auto_1fr] gap-3 py-3 items-center`}>
											<img src={notification.img_url || '/avatar.svg'} alt={`${notification.firstname} ${notification.lastname}`} className="h-16 w-16 shrink-0 rounded-full" />
											<div><b>{notification.firstname} {notification.lastname}</b> ha publicado nuevo contenido.</div>
										</Link>
									</li>
								)
							}
						})


					}

					<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
						<div className="h-16 w-16 shrink-0 bg-primary-300 rounded-full"></div>
						<div className=""><b>Juan Pérez</b> a publicado nuevo contenido.</div>
					</li>

					<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
						<div className="h-16 w-16 shrink-0 bg-primary-300 rounded-full"></div>
						<div className=""><b>Juan Pérez</b> a comentado tu publicación.</div>
					</li>

					<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
						<div className="h-16 w-16 shrink-0 bg-primary-300 rounded-full"></div>
						<div className="text-gray-500"><b>Juan Pérez</b> le ha dado me gusta a tu publicación.</div>
					</li>

					<li className="grid grid-cols-[auto_1fr] gap-3 py-3 items-center">
						<div className="h-16 w-16 shrink-0 bg-primary-300 rounded-full"></div>
						<div className="text-gray-500">Tienes una nueva solicitud de amistad de <b>Juan Pérez</b>.</div>
					</li>

				</ul>
			</div>
		</div>
	)
}