// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
let btn = document.querySelector(".nav-toggle");
let nav = document.querySelector(".links");

//-->>Cach 1

// btn.addEventListener("click", () => {
//   if (nav.className === "links") {
//     nav.className = "links show-links";
//   } else {
//     nav.className = "links";
//   }
// });
//-->>Cach 2

// btn.addEventListener("click", ()=>{
//     if (nav.classList.contains("show-links")) {
//         nav.classList.remove("show-links");
//     } else {
//         nav.classList.add("show-links");
//     }
// })
//-->>Cach 3

btn.addEventListener("click", ()=>{
    nav.classList.toggle("show-links");
})