const meButton = document.getElementById("meButton");
const kaiButton = document.getElementById("kaiButton");
const winScreen = document.getElementById("winScreen");

let meSize = 1;
let kaiSize = 1;

meButton.addEventListener("click", () => {
    meSize *= 0.78;
    kaiSize *= 1.16;

    meButton.style.transform = `scale(${meSize})`;
    kaiButton.style.transform = `scale(${kaiSize})`;

    if (meSize < 0.08) {
        meButton.style.opacity = "0";
        meButton.style.pointerEvents = "none";
    }
});

kaiButton.addEventListener("click", () => {
    winScreen.classList.add("active");
});
