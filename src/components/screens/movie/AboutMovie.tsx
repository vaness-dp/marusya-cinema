import { Heading } from '@/ui/Heading'

import { FilmParameter } from './components/FilmParameter'

interface Props {
	language: string
	budget: string
	revenue: string
	director: string
	production: string
	awards: string
}

export function AboutMovie({ language, budget, revenue, director, production, awards }: Props) {
	return (
		<div className="flex flex-col pt-10 pb-30">
			<Heading className="self-stretch">About movie</Heading>
			<div className="flex flex-col gap-6">
				<FilmParameter
					title="Language"
					value={language}
				/>
				<FilmParameter
					title="Budget"
					value={budget}
				/>
				<FilmParameter
					title="Revenue"
					value={revenue}
				/>
				<FilmParameter
					title="Director"
					value={director}
				/>
				<FilmParameter
					title="Production"
					value={production}
				/>
				<FilmParameter
					title="Awards"
					value={awards}
				/>
			</div>
		</div>
	)
}
