const closebtn = document.querySelector(".close-btn");
const navbtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

navbtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
});
closebtn.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar");
})