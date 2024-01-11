import { getFoodComments } from "@/app/lib/data"
import FoodComment from "./food-comment";
import FoodCreateComment from "./food-create-comment";

export default async function FoodComments({ postId }: { postId: string }) {
	const comments = await getFoodComments(postId);

	return (
		<div className="px-6 flex flex-col gap-3 divide-y -mt-6">

			{
				comments.map(comment => <FoodComment comment={comment} key={comment.id} />)
			}


			<FoodCreateComment />
		</div>


	)
}