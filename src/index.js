import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
let mybutton = document.getElementById("my-button");
mybutton.addEventListener("click", changeText);

function changeText() {
  //Elementin muutos
  let elementToChange = document.getElementById("headline");
  elementToChange.innerText = "My notebook";
  //Printtaus:
  console.log("hello world");
}

let secondButton = document.getElementById("add-data");
secondButton.addEventListener("click", addList);

function addList() {
  //Lisää listaan elementin
  const text = "This was added!";
  const textNode = document.createTextNode(text);
  const listItem = document.createElement("li");

  listItem.appendChild(textNode);

  const list = document.getElementById("listToAdd");

  list.appendChild(listItem);
}
