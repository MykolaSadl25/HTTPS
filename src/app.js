import debounce from "lodash.debounce";

const listRef = document.querySelector(".list");
const inputRef = document.querySelector("input");

let searchQuery = "cat";

function getPictures(search) {
  return fetch(
    `https://pixabay.com/api/?key=55978698-0d602613e63391cce9d7defd1&image_type=photo&q=${searchQuery}`).then((res) => res.json());
}


inputRef.addEventListener("input",debounce((e)=>{
  searchQuery = e.target.value;
  getPictures(searchQuery).then((res) => createItems(res.hits));
},500))


function createItems(array) {
  const item = array.map(({largeImageURL, tags, name, downloads, comments,views,likes,user}) => {
    return `<li>
  <img class="image" src="${largeImageURL}" alt="${name}">
  <ul>
    <li>Downloads:${downloads}</li>
    <li>Comments:${comments}</li>
    <li>Views:${views}</li>
    <li>Likes:${likes}</li>
  </ul>
  <p>Created by:${user}</p>
</li>`;
  }).join("");
listRef.innerHTML = item;
}
