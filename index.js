let main = document.querySelector("main");
let renderArea = document.getElementById("renderArea");
let cards = renderArea.parentNode.children[1].childNodes;

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    main.innerHTML = "";

    let id = e.target.id
    let file = id + ".html";
    let xhr = ajax("get", file);

    xhr.addEventListener("load", (e) => {
      e.stopPropagation
      if (xhr.status == 200) {
        main.innerHTML = xhr.response;
      }
    });
  });
});

function ajax(method, url) {
  let http_method = method;
  let xhr = new XMLHttpRequest();
  xhr.open(http_method, url);
  xhr.send();
  return xhr;
}