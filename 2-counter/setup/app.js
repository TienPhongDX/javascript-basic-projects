// set giá trị ban đầu
let count = 0;

// select DOM ảnh hưởng
const value = document.getElementById('value');
const btns = document.querySelectorAll(".btn");

 btns.forEach((btn) => {
     btn.addEventListener('click', (e)=>{
         const styles = e.currentTarget.classList;
         if (styles.contains("decrease")) {
             count--;
         } else if (styles.contains("increase")){
            count++;
         }
         else{
             count = 0;
         }
         value.textContent = count;
         if (count > 0) {
             value.style.color = "green";
         }
         if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
     })
 });

// CORE: querySelectorAll, e.currentTarget.classList, styles.contains()