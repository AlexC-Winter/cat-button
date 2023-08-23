var button = document.querySelector(".show-cat");
//console.log(button);
var cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function() {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show")
        button.innerText="Wait! Come Back!!"
        button.classList.add("disappear")
    } else {
        cat.classList.add("show")
        button.innerText="shoo, cat!!"
        button.classList.remove("disappear")}
});