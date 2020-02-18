const importedAssets = {}

/**
 * Imports a css by URL
 * @param string url 
 * @param document context 
 */
const importCSS = function (url, context = window.document) {
	// Check to see if the asset was already loaded or is pending
	if (typeof importedAssets[url] === 'object') {
		return importedAssets[url]
	} else if (importedAssets[url] === 'done') {
		return Promise.resolve(url)
	} else if (importedAssets[url] === 'error') {
		return Promise.resolve(url)
	}

	const promise = new Promise(function(resolve, reject) {
		const styleLink = context.createElement('link')
		styleLink.type = 'text/css'
		styleLink.rel = 'stylesheet'
		styleLink.href = url

		styleLink.onload = function () {
			resolve(context)
			importedAssets[url] = 'done'
		}

		styleLink.onerror = function () {
			reject(context)
			importedAssets[url] = 'error'
		}

		context.getElementsByTagName('head')[0].appendChild(styleLink)
	})

	// add the file to imported files
	importedAssets[url] = promise

	return promise
}

export default importCSS