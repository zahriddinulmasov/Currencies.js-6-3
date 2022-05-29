// CONSTS

const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form__input");
const elFormSelect = document.querySelector(".form__select");
const elResult = document.querySelector(".form__result");

const rubl = 167.98;
const usd = 11045.00;
const evro = 11853.66;
const dinor = 36151.93;
const dirxam = 3007.00;
const tenge = 25.39;

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    const inputValue = elFormInput.value;
    let inputSelect = elFormSelect.value;
    console.log(inputSelect);

    if (elFormSelect.value === "rubl") {
        elResult.textContent = inputValue * rubl;
    } else if (elFormSelect.value === "usd") {
        elResult.textContent = inputValue * usd;
    } else if (elFormSelect.value === "evro") {
        elResult.textContent = inputValue * evro;
    } else if (elFormSelect.value === "dinor") {
        elResult.textContent = inputValue * dinor;
    } else if (elFormSelect.value === "dirxam") {
        elResult.textContent = inputValue * dirxam;
    } else if (elFormSelect.value === "tenge") {
        elResult.textContent = inputValue * tenge;
    }
})