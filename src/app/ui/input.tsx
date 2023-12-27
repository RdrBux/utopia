interface Props {
	label: string
	id: string
	type?: string
	placeholder?: string
}

export default function Input({ label, id, type = 'text', placeholder = '' }: Props) {
	return (
		<div className="">
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
			<input type={type} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
		</div>
	)
}