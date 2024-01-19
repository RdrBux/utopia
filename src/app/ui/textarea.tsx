interface Props {
	label: string
	id: string
	placeholder?: string
	[x: string]: any
}

export default function Textarea({ label, id, placeholder = '', props }: Props) {
	return (
		<div className="">
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
			<textarea id={id} name={id} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder={placeholder} {...props} ></textarea>
		</div>
	)
}