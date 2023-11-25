const loadingImg = document.getElementById("loadingImg");
const main = document.getElementById("main");

/*Loading Screen*/
setTimeout(() => {
    loadingImg.classList.add("loading-img--fadeout");
}, 3000);

setTimeout(() => {
    loadingImg.style.display = "none";
    main.style.display = "block";
}, 5000);