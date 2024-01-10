import { PostFoodType } from '@/app/lib/definitions'
import PostFood from '@/app/ui/main/post-food'

export default function Posts({ data }: { data: PostFoodType[] }) {
	return (
		<>
			{
				data.map(food => <PostFood food={food} key={food.id} />)
			}
		</>
	)
}