async function getTemplate(filePath) {
  const response = await fetch(filePath)
  const txt = await response.text();
  const html = new DOMParser().parseFromString(txt, 'text/html');
  return html.querySelector('template');
}

export {
  getTemplate
}