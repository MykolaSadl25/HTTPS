export default function createCountryList(array) {
  return `
    <ul>
      ${array.map(({ name }) => `<li>${name.official}</li>`).join("")}
    </ul>
  `;
}

// 1213