import Link from "next/link";

export default function CheckboxTerms() {
	return (
		<div className="flex items-center">
			<input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" required />
			<label htmlFor="link-checkbox" className="ms-2 text-sm text-gray-600">He leído y acepto los <Link href="/" className="text-blue-600 font-semibold hover:underline ">términos y condiciones</Link>.</label>
		</div>
	)
}