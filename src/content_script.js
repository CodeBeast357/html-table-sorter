(function (window, document, tsorter) {
  const tables = Array.from(document.getElementsByTagName('table'))
  if (!tables.length) return
  const sorters = tables.map(tsorter.create)
  window.addEventListener("unload", () => {
    sorters.forEach(t => t.destroy())
  })
})(window, document, tsorter)
