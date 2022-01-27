// MENU BURGER
const hidden = document.getElementById('hidden');
const burger_btn = document.getElementById('burger-btn');

burger_btn.addEventListener("click", function () {
    hidden.classList.toggle("isActive");
});
// MENU BURGER



// ACCORDEON FAQ
const faccordeon = document.querySelectorAll('.faccordeon');
console.log(faccordeon);

faccordeon.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target.id)
        switch (e.target.id) {
            case "securite":
                repsecurite.classList.toggle("showned");
                break;
            case "langage":
                replangage.classList.toggle("showned");
                break;
            case "accessibilite":
                repaccessibilite.classList.toggle("showned");
                break;
            case "modifier":
                repmodifier.classList.toggle("showned");
                break;
                case "cheques":
                repcheques.classList.toggle("showned");
                break;
                case "personnes":
                reppersonnes.classList.toggle("showned");
                break;
            default:
                break;
        }
    })
})

    // e.target.id
// ACCORDEON FAQ

