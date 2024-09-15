let image = document.getElementById("image");
let model = document.getElementById("model");
let modelClose = document.getElementById("model-close");
let modelImage = document.getElementById("model-image");


image.addEventListener("click", () => {
    model.classList.add("active");
})

modelClose.addEventListener("click", () => {
    model.classList.remove("active");
});
