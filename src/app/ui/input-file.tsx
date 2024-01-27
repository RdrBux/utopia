export default function InputFile({ id, label }: { id: string, label: string }) {
	return (
		<div>
			<label className="block mb-2 text-sm font-medium cursor-pointer text-gray-900" htmlFor={id}>
				{label}
			</label>
			<input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id={id} name={id} type="file" accept="image/png, image/gif, image/jpeg" />
		</div>
	)
}