'use client'

import { acceptFriendRequest, cancelFriendRequest, rejectFriendRequest, removeFriend, sendFriendRequest } from "@/app/lib/actions"
import Accept, { Add, Cancel, CancelSecondary, Delete } from "./friendship-buttons";

export function AddButton({ targetId }: { targetId: string }) {
	async function handleForm() {
		await sendFriendRequest(targetId);
	}

	return (
		<form action={handleForm}>
			<Add />
		</form>
	)
}

export function CancelButton({ targetId }: { targetId: string }) {
	async function handleForm() {
		await cancelFriendRequest(targetId);
	}

	return (
		<form action={handleForm}>
			<Cancel />
		</form>
	)
}

export function RespondButtons({ sourceId }: { sourceId: string }) {
	async function handleAccept() {
		await acceptFriendRequest(sourceId);
	}

	async function handleReject() {
		await rejectFriendRequest(sourceId);
	}

	return (
		<div className="flex gap-2 items-center">
			<form action={handleAccept}>
				<Accept />
			</form>
			<form action={handleReject}>
				<CancelSecondary />
			</form>
		</div>
	)
}

export function DeleteButton({ targetId }: { targetId: string }) {
	async function handleForm() {
		await removeFriend(targetId);
	}

	return (
		<form action={handleForm}>
			<Delete />
		</form>
	)
}

export function AddRejectedButton({ sourceId }: { sourceId: string }) {
	async function handleForm() {
		await acceptFriendRequest(sourceId);
	}

	return (
		<form action={handleForm}>
			<Add />
		</form>
	)
}