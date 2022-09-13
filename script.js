const btn = document.createElement("button");
btn.innerHTML = "New Cat Image";

const searchBar = document.createElement("input");
searchBar.type = "text";
searchBar.placeholder = "Search for any kind of GIF";

document.body.appendChild(btn);
document.body.appendChild(searchBar);

const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=J9VsZbYtQXJWg1YGN8OTJJNV0TGHbuIz&s=cats",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });


btn.addEventListener("click", function () {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=J9VsZbYtQXJWg1YGN8OTJJNV0TGHbuIz&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
});

searchBar.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=J9VsZbYtQXJWg1YGN8OTJJNV0TGHbuIz&s=${searchBar.value}`,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        img.src = response.data.images.original.url;
      })
      .catch((error) => {
        console.log(error);
        const errorImg = document.createElement("img");
        errorImg.src = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
        document.body.appendChild(errorImg);
      });
  }
});
