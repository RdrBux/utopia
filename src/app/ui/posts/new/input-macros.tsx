export default function InputMacros({ label, id }: { label: string, id: string }) {
	return (
		<div className="">
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
			<div className="flex">
				<input type="number" name={id} min={0} defaultValue={0} id={id} className="peer bg-emerald-50 border border-emerald-300 text-gray-900 text rounded-l-lg focus:ring-emerald-500 block w-16 text-right p-2.5 focus:ring-2 focus:border-emerald-500 outline-none" />
				<span className="p-2.5 rounded-r-lg bg-emerald-200 border-y border-r font-semibold border-emerald-300 peer-focus:ring-2 peer-focus:ring-emerald-500 peer-focus:border-emerald-500">g</span>
			</div>
		</div>
	)

}