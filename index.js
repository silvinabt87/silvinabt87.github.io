let iframe = document.querySelector("iframe");
let cards = document.getElementById("gigs").childNodes;

console.log(cards);

cards.forEach((card) => {
  card.addEventListener("click", renderPage);
});
function renderPage(e) {
  e.preventDefault();
  console.log("tarjeta");
  let card = e.target;
  let id = card.id;
  console.log(id);
  let file = id + ".html";
  iframe.src = file;
}

// cards.addEventListener("click", (e) => {
//   if (e.target.className == "card") {
//     console.log('hola')
//     e.stopPropagation();
//     e.preventDefault();
//     // iframe.innerHTML = "";
//     let id = e.target.id;
//     console.log(e.target.id);
//     let file = id + ".html";
//     let xhr = ajax("get", file);

//     xhr.addEventListener("load", () => {

//         iframe.innerHTML = xhr.response;
//         console.log(xhr.response);

//       });
//       xhr.send();
//       return xhr;
//   }
// });

// ajax = (method, url) => {
//   let http_method = method;
//   let xhr = new XMLHttpRequest();
//   xhr.open(http_method, url);

// };
