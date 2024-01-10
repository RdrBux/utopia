import { getFoods } from "@/app/lib/data"
import Posts from "./search/posts"

export default async function HomePosts() {
	const foods = await getFoods()

	return (
		<Posts data={foods} />
	)
}