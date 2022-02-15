const btnClick = document.querySelector(".boton");  
const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");

btnClick.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.background = "black";
    if(btn.checked) {
        btn.checked = false;
    }
});