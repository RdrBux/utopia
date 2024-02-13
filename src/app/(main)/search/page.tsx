import ResultsPeople from "@/app/ui/main/search/results-people";
import ResultsPosts from "@/app/ui/main/search/results-posts";
import SearchBar from "@/app/ui/main/search/search-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Búsqueda',
}

export default function Home({ searchParams }: { searchParams: { query?: string } }) {
	const query = searchParams?.query || ''

	return (
		<div className="main-layout">
			<div className="flex flex-col gap-6 lg:col-start-2">
				<SearchBar />
				<ResultsPeople query={query} />
				<ResultsPosts query={query} />
			</div>
		</div>
	)
}