const gradientBox = document.querySelector(".colorBox");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const copyBtn = document.querySelector(".copy");

const body = document.querySelector("body");
const button = document.querySelector("button");


const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if(isRandom) { 
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    body.style.background = gradient;
    button.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}

colorInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
});


selectMenu.addEventListener("change", () => generateGradient(false));
copyBtn.addEventListener("click", copyCode);