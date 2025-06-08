export function formatMoney(value: string | number): string {
	if (!value) return '0 rub'

	// Преобразуем в число, убирая все нечисловые символы
	const numericValue = Number(String(value).replace(/[^\d]/g, ''))

	if (isNaN(numericValue)) return '0 rub'

	// Форматируем число с пробелами между разрядами
	return numericValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' rub'
}
