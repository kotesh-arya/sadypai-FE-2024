const heading = document.getElementById("head");
console.log(heading.dataset);
console.log(typeof heading);

let sampleMap = new Map();

sampleMap.set("name", "kotesh");
sampleMap.set("age", 26);

console.log(sampleMap.size);

let obj = {
  name: "kinguu",
  city: "jammalamadugu",
};

// obj.forEach((item) => {
//   console.log(item); //  Uncaught TypeError: obj.forEach is not a function, cause the obj donot have any methdod with the name of forEach
// });

const formElement = document.getElementById("my-form");
let formData = {};
console.log(formElement.length, "elements length");
const submitBtn = document.getElementById("form-submit-btn");
function handleFormSubmission(e) {
  for (let i = 0; i < formElement.length; i++) {
    if (formElement[i].type !== "submit") {
      formData[formElement[i].name] = formElement[i].value;
    }
  }
  console.log(formData);
}
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleFormSubmission();
});
// All about events of HTML elements and the Object returned from an event triggering
const hoveredElement = document.getElementById("hover-element");
const clickedElement = document.getElementById("click-element");
const draggableElement = document.getElementById("draggable");
console.log(draggableElement);
draggableElement.draggable = true;
draggableElement.contentEditable = true;
const pageElement = document;
console.log(pageElement);
hoveredElement.addEventListener("mouseover", (event) => {
  // console.log("hovered me!");
  console.log(typeof event); //This is an object
});

clickedElement.addEventListener("click", (e) => {
  if (e.shiftKey) {
    console.log("I will respond now, as you clicked me by holding a shift key");
  }
});

const parentElement = document.getElementById("parent");

// Using childNodes --> ALl types of nodes including text and comment nodes
const allNodes = parentElement.childNodes; // NodeList (includes text, span, comment, and p)
console.log(
  allNodes,
  "ChildNodes includes all types of nodes like text nodes and comment nodes also"
);
// Using children  ---> HTML - elements
const onlyElements = parentElement.children; // HTMLCollection (includes only span and p)
console.log(
  onlyElements,
  "HTML collection will include only HTML children of a parent element"
);

// Simulating a click event for an element
const eventSendingButtonElement = document.getElementById(
  "event-sending-button"
);
const checkBox = document.getElementById("tick-box");

function simulateClickEvent(element) {
  const evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(evt);
}

eventSendingButtonElement.addEventListener("click", () => {
  simulateClickEvent(checkBox);
});

checkBox.addEventListener("click", (event) => {
  console.log(event);
});
