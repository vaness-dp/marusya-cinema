export function formatRuntime(minutes?: number): string {
	if (!minutes || isNaN(minutes)) return ''
	const hours = Math.floor(minutes / 60)
	const mins = minutes % 60

	if (hours && mins) return `${hours} ч ${mins} мин`
	if (hours && !mins) return `${hours} ч`
	return `${mins} мин`
}
