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
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies, rootElm);
}
function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}
function createUI(movies, root) {
  rootElm.innerHTML = "";
  movies.forEach((movie, id) => {
    let li = ele(
      li,
      { className: "movie-list-item" },
      ele(span, {}, movie.name),
      ele(
        button,
        { className: "btn", id: id, onclick: handleClick },
        movie.watched ? "Watched" : "To Watch"
      )
    );
    root.append(li);
  });
}
createUI(allMovies, rootElm);
