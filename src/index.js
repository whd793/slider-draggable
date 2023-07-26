// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const container = document.querySelector(".container");
const cards = document.querySelector(".cards");
let startpos;
let moved = false;

container.addEventListener("mousedown", (e) => {
  e.preventDefault();
  moved = true;
  startpos = e.offsetX - cards.offsetLeft;
  // console.log(e.offsetX);
  // console.log(cards.offsetLeft);
  // console.log(startpos);
});

window.addEventListener("mouseup", (e) => {
  moved = false;
});

container.addEventListener("mousemove", (e) => {
  if (!moved) return;
  e.preventDefault();
  console.log(e.offsetX - startpos);
  cards.style.left = `${e.offsetX - startpos}px`;

  console.log(cards.style.left);

  const cardsrect = cards.getBoundingClientRect();
  const containerrect = container.getBoundingClientRect();
  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cardsrect.right < containerrect.right) {
    cards.style.left = -`${cardsrect.width + containerrect.width}px`;
  }
  console.log(cardsrect.right, containerrect.right);
  //  else if ()
});
