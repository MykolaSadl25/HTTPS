export default function createItems(array) {
  const item = array
    .map(({ name, population, capital, languages, flags }) => {
      return `
    <h2 class="commonName">${name.official}</h2>
  <div class="wrap">
  <div class="info">
    <p class="capital">${capital?.[0]}</p>
    <p class="population">${population}</p>
    <h2 class="heading">Languages</h2>
    <ul class="languagesList">${createLanguages(languages)}</ul>
  </div>
  <img class="flag" src="${flags.svg}">
</div>
`;
    })
    .join("");
  return item;
}

function createLanguages(languages) {
  return Object.values(languages)
    .map((item) => `<li class="language"><p class="text">${item}</p></li>`)
    .join("");
}
