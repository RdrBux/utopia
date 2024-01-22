'use client'

import { acceptFriendRequest, cancelFriendRequest, rejectFriendRequest, removeFriend, sendFriendRequest } from "@/app/lib/actions"

export function AddButton({ targetId }: { targetId: string }) {
	function handleClick() {
		sendFriendRequest(targetId);
	}

	return (
		<button onClick={handleClick} className="btn-primary flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
				<path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
			</svg>
			Agregar
		</button>
	)
}

export function CancelButton({ targetId }: { targetId: string }) {
	function handleClick() {
		cancelFriendRequest(targetId);
	}

	return (
		<button onClick={handleClick} className="btn-primary flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
				<path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
			</svg>
			Cancelar
		</button>
	)
}

export function RespondButtons({ sourceId }: { sourceId: string }) {
	function handleAccept() {
		acceptFriendRequest(sourceId);
	}

	function handleReject() {
		rejectFriendRequest(sourceId);
	}

	return (
		<div className="flex gap-2">
			<button onClick={handleAccept} className="btn-primary flex items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
					<path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
				</svg>
				Aceptar
			</button>
			<button onClick={handleReject} className="btn-secundary flex items-center gap-2">
				Cancelar
			</button>
		</div>
	)
}

export function DeleteButton({ targetId }: { targetId: string }) {
	function handleClick() {
		removeFriend(targetId);
	}

	return (
		<button onClick={handleClick} className="btn-primary flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
				<path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
			</svg>
			Eliminar
		</button>
	)
}

export function AddRejectedButton({ sourceId }: { sourceId: string }) {
	function handleClick() {
		acceptFriendRequest(sourceId);
	}

	return (
		<button onClick={handleClick} className="btn-primary flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
				<path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
			</svg>
			Agregar
		</button>
	)
}