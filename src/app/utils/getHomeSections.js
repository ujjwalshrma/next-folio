export const getSections = (slicesArr, sectionName) => {
	const section = slicesArr.find((section) => {
		return section.slice_type === sectionName
	})

	return section
}
