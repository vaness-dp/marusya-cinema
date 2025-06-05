import { use } from 'react'

import { MoviePage } from '@/components/screens/movie/MoviePage'

interface Props {
	params: Promise<{
		id: string
	}>
}

export default function MoviePageWrapper({ params }: Props) {
	const resolvedParams = use(params)
	return <MoviePage movieId={resolvedParams.id} />
}
