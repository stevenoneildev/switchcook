const celsiusField = document.getElementById("celsiusInput");
const fahrenheitField = document.getElementById("fahrenheitInput");
const resetTemperature = document.getElementById("resetTemperature");

celsiusField.addEventListener("input", function () {
    celsiusValue = parseFloat(document.getElementById("celsiusInput").value);
    fahrenheitValue = (celsiusValue * 9 / 5) + 32;
    document.getElementById("fahrenheitInput").value = fahrenheitValue.toFixed(1);
});

fahrenheitField.addEventListener("input", function () {
    fahrenheitValue = parseFloat(document.getElementById("fahrenheitInput").value);
    celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    document.getElementById("celsiusInput").value = celsiusValue.toFixed(1);
});

resetTemperature.addEventListener("click", function () {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
});