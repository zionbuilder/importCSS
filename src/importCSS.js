const importCSS = function (url, context = window.document) {
	return new Promise((resolve, reject) => {
		const styleLink = context.createElement('link')
		styleLink.type = 'text/css'
		styleLink.rel = 'stylesheet'
		styleLink.href = url
		styleLink.onload = function () {
			resolve(context)
		}
		styleLink.onerror = function () {
			reject(context)
		}

		context.getElementsByTagName('head')[0].appendChild(styleLink)
	})
}

export default importCSS