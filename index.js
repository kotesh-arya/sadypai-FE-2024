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

obj.forEach((item) => {
  console.log(item);  //  Uncaught TypeError: obj.forEach is not a function, cause the obj donot have any methdod with the name of forEach
});


