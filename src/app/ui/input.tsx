interface Props {
	label: string
	id: string
	[x: string]: any
}

export default function Input({ label, id, ...props }: Props) {
	return (
		<div className="">
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
			<input id={id} name={id} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 focus:ring-2 focus:border-primary-500 outline-none `} {...props} />
		</div>
	)
}