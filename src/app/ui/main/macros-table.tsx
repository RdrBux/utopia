type Macros = {
	proteins: string,
	carbs: string,
	fats: string,
	kcals: string
}

export default function MacrosTable({ macros }: { macros: Macros }) {
	const { proteins, carbs, fats, kcals } = macros

	return (
		<table className="w-fit text-sm text-left rtl:text-right text-gray-500">
			<thead className="text-xs text-gray-700 uppercase bg-gray-100">
				<tr>
					<th scope="col" className="px-6 py-3 rounded-s-lg">
						MACROS
					</th>
					<th scope="col" className="px-6 py-3 rounded-e-lg">

					</th>
				</tr>
			</thead>
			<tbody>
				<tr className="bg-white">
					<th scope="row" className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
						Proteínas
					</th>
					<td className="px-6 py-1">
						{proteins}g
					</td>
				</tr>
				<tr className="bg-white">
					<th scope="row" className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
						Carbohidratos
					</th>
					<td className="px-6 py-1">
						{carbs}g
					</td>
				</tr>
				<tr className="bg-white">
					<th scope="row" className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
						Grasas
					</th>
					<td className="px-6 py-1">
						{fats}g
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr className="font-semibold text-gray-900">
					<th scope="row" className="px-6 py-1 text-base">Total calorías</th>
					<td className="px-6 py-1">{kcals} kcal</td>
				</tr>
			</tfoot>
		</table>
	)
}