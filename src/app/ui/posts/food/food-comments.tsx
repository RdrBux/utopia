import { getFoodComments } from "@/app/lib/data"
import FoodComment from "./food-comment";

export default async function FoodComments({ postId }: { postId: string }) {
	const comments = await getFoodComments(postId);

	return (
		<div className="px-6 flex flex-col gap-3 divide-y -mt-6">

			{
				comments.map(comment => <FoodComment comment={comment} key={comment.id} />)
			}


			<div className="flex gap-1 pt-6">
				<div className="h-10 w-10 shrink-0 bg-primary-300 rounded-full"></div>
				<textarea id="chat" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Escribe un comentario..."></textarea>
				<button type="submit" aria-label="Enivar mensaje" className="inline-flex justify-center p-2 text-primary-600 rounded-lg h-fit cursor-pointer hover:bg-primary-100">
					<svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
						<path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
					</svg>
				</button>
			</div>
		</div>


	)
}