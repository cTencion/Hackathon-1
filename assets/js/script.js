// MENU BURGER
const hidden = document.getElementById('hidden');
const burger_btn = document.getElementById('burger-btn');

burger_btn.addEventListener("click", function () {
    hidden.classList.toggle("isActive");
});
// MENU BURGER



// ACCORDEON FAQ
const faccordeon = document.getElementById('faccordeon');

faccordeon.addEventListener("click", function(){
    this.nodeParent.nextSibling.classList.toggle('showned');
});

// ACCORDEON FAQ

