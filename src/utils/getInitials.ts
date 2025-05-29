export function getInitials(fullName: string) {
	const arr = fullName.split(' ')
	if (arr.length === 1) return arr[0][0]?.toUpperCase() ?? ''
	return (arr[0][0] + arr[1][0]).toUpperCase()
}
