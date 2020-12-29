//using selectors inside the element

const question = document.querySelectorAll(".question");

question.forEach((ques) => {
  const btn = ques.querySelector(".question-btn");

  btn.addEventListener("click", (e) => {
    ques.classList.toggle("show-text");
  });
});

// traversing the dom

// const showbtn = document.querySelectorAll(".question-btn");

// showbtn.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });
