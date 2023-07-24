function compile() {
	const html = document.querySelector("#html").value
	const css = document.querySelector("#css").value
	const js = document.querySelector("#js").value
	const code = document.querySelector("#code").contentWindow.document
	const text = html+"<style>"+css+"</style>"+"<script>"+js+"</script>"
	code.open()
	code.write(text)
	code.close()
}
