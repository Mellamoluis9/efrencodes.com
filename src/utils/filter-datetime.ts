const filterDateTime = (datetime: string): string => {
	const date = new Date(datetime)
	let localeDate = date.toLocaleString('mx-es', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	})
	return localeDate
}

export default filterDateTime
