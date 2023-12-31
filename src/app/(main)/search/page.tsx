import ResultsPeople from "@/app/ui/main/search/results-people";
import ResultsPosts from "@/app/ui/main/search/results-posts";
import SearchBar from "@/app/ui/main/search/search-bar";

export default function Home() {
	return (
		<div className="grid grid-cols-[1fr_2fr_1fr] gap-6 my-6 items-center">
			<div className=""></div>
			<div className="flex flex-col gap-6">
				<SearchBar />
				<ResultsPeople />
				<ResultsPosts />
			</div>
		</div>
	)
}