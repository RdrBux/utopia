export default function InputFile({ id, title }: { id: string, title: string }) {
	return (
		<div>
			<label className="block mb-2 text-sm font-medium cursor-pointer text-gray-900" htmlFor={id}>
				{title}
			</label>
			<input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id={id} name={id} type="file" />
		</div>
	)
}