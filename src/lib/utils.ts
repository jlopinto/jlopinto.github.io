export const getWords = (monthCount: number): string => {
	const getPlural = (number, word) => (number === 1 && word.one) || word.other;

	const months = { one: 'mois', other: 'mois' },
		years = { one: 'année', other: 'ans' },
		m = monthCount % 12,
		y = Math.floor(monthCount / 12),
		result = [];

	y && result.push(y + ' ' + getPlural(y, years));
	m && result.push(m + ' ' + getPlural(m, months));
	return result.join(' et ');
};
