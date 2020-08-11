(function () {
  let frame = document.getElementById("render");
  let cards = document.getElementById("gigs");
  let arrow = document.getElementById("arrow");
  let gigs = document.getElementById("gigs");

  cards.addEventListener("click", (e) => {
    e.stopPropagation();
    frame.innerHTML = "";
    let card = e.target;
    let id = card.id;
    let file = `${id}.html`;
    let xhr = new XMLHttpRequest();
    xhr.open("get", file);
    xhr.send();
    xhr.addEventListener("load", (e) => {
      if (xhr.status === 200 || xhr.status === 340) {
        frame.innerHTML = xhr.response;
        frame.scrollIntoView({block: "start", behavior: "smooth"});
        let buttonUp = document.getElementById("buttonUp");
        buttonUp.addEventListener("click", (e) => {
          gigs.scrollIntoView({block: "start", behavior: "smooth"});
        });

        return xhr;
      }
    });
  });

  arrow.addEventListener("click", (e) => {
    gigs.scrollIntoView({block: "end", behavior: "smooth"});
  });
})();
