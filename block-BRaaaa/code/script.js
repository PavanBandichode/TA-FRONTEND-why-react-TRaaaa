let input = document.querySelector("input");
let rootElm = document.querySelector("ul");

let allMovies = [
  {
    name: "Inception",
    watched: false,
  },
  {
    name: "Mad Max",
    watched: false,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    let movie = {
      name: event.target.value,
      watched: false,
    };
    allMovies.push(movie);
    event.target.value = "";
  }
  createUI(allMovies, rootElm);
});
function handleClick(event) {
  let idx = event.target.idx;
  allMovies[idx].watched = !allMovies[idx].watched;
  createUI(allMovies, rootElm);
}
function createUI(movies, root) {
  rootElm.innerHTML = "";
  movies.forEach((movie, idx) => {
    let li = document.createElement("li");
    li.classList.add("movie-list-item");
    let span = document.createElement("span");
    span.innerText = movie.name;
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = movie.watched ? "Watched" : "To Watch";
    button.idx = idx;
    button.addEventListener("click", handleClick);
    li.append(span, button);
    root.append(li);
  });
}
createUI(allMovies, rootElm);
