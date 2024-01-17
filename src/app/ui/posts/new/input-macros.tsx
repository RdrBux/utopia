export default function InputMacros({ label, id }: { label: string, id: string }) {
	return (
		<div className="text-white">
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-primary-50">{label}</label>
			<div className="flex">
				<input type="number" name={id} min={0} defaultValue={0} id={id} className="peer bg-primary-700 border border-primary-500 rounded-l-lg focus:ring-primary-400 block w-14 text-right p-1.5 focus:ring-2 focus:border-primary-500 outline-none" />
				<span title="gramos" className="cursor-default p-1.5 px-3 rounded-r-lg bg-primary-600 border-y border-r border-primary-500 peer-focus:ring-2 peer-focus:ring-primary-400 peer-focus:border-primary-400">g</span>
			</div>
		</div>
	)

}