'use client'

import { useState } from "react";

export default function TextareaBio({ text }: { text: string }) {
	const [textValue, setTextValue] = useState(text);

	function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		if (event.target.value.length > 40) {
			return;
		}
		setTextValue(event.target.value);
	}

	return (
		<div className="">
			<label htmlFor="profile_bio" className="flex justify-between gap-2 mb-2 text-sm font-medium text-gray-900">Biografía breve <span className={`${textValue.length >= 40 ? 'text-red-500' : 'text-gray-500'}`}>({textValue.length}/40)</span></label>
			<textarea value={textValue} onChange={handleChange} id="profile_bio" name="profile_bio" rows={2} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
		</div>
	)
}