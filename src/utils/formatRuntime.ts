export function formatRuntime(minutes?: number): string {
	if (!minutes || isNaN(minutes)) return ''
	const hours = Math.floor(minutes / 60)
	const mins = minutes % 60

	if (hours && mins) return `${hours} h ${mins} min`
	if (hours && !mins) return `${hours} h`
	return `${mins} min`
}
