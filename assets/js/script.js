const hidden = document.getElementById('hidden')
const burger_btn = document.getElementById('burger-btn');

burger_btn.addEventListener("click", function(){
    hidden.classList.toggle("isActive");
});
