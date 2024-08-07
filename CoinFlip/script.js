document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("coinflip-button");
    const resultDiv = document.getElementById("result");

    button.addEventListener("click", function() {
        const result = Math.random() < 0.5 ? "Kopf" : "Zahl";
        resultDiv.textContent = `Ergebnis: ${result}`;
    });
});
