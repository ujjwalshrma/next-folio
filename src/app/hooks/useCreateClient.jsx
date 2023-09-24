import { createClient } from '@/prismicio'

export const useCreateClient = async (
	docFetchMethod,
	docType,
	fetchOptions,
	UID
) => {
	const client = createClient()

	if (docFetchMethod === 'single' && fetchOptions) {
		const document = await client.getSingle(docType, {
			fetchLinks: fetchOptions.length < 1 ? fetchOptions : [...fetchOptions],
		})

		return document
	}

	if (!fetchOptions && !UID) {
		const document = await client.getSingle(docType)
		return document
	}

	if (docFetchMethod === 'uid') {
		const document = await client.getByUID(docType, UID)
		return document
	}
}
