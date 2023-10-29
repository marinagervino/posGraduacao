const gabaritos = [
    "A vida é assim: esquenta e esfria, aperta e daí afrouxa, sossega e depois desinquieta. O que ela quer da gente é coragem.",
    "Outro gabarito aqui..."
];

const userInput = document.getElementById("user-input");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset-button");
let startTime;
let gabaritoIndex = 0;

function reset() {
    userInput.value = "";
    result.textContent = "0 segundos";
    startTime = null;
}

resetButton.addEventListener("click", reset);

userInput.addEventListener("input", () => {
    if (!startTime) {
        startTime = Date.now();
    }

    const typedText = userInput.value;
    const expectedText = gabaritos[gabaritoIndex].substr(0, typedText.length);

    if (typedText === gabaritos[gabaritoIndex]) {
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000;
        result.textContent = elapsedTime.toFixed(2) + " segundos";
        gabaritoIndex = (gabaritoIndex + 1) % gabaritos.length; // Avança para o próximo gabarito
        reset();
    } else if (expectedText !== typedText) {
        startTime = Date.now();
    }
});

userInput.addEventListener("paste", (event) => {
    event.preventDefault(); // Impede a colagem de texto
});
