const millilitersField = document.getElementById("millilitersInput");
const teaspoonsField = document.getElementById("teaspoonsInput");
const tablespoonsField = document.getElementById("tablespoonsInput");
const ouncesField = document.getElementById("ouncesInput");
const cupsField = document.getElementById("cupsInput");
const resetVolume = document.getElementById("resetVolume");

millilitersField.addEventListener("input", function() {
    millilitersValue = parseFloat(document.getElementById("millilitersInput").value);
    teaspoonsValue = millilitersValue / 5;
    tablespoonsValue = millilitersValue / 15;
    ouncesValue = millilitersValue / 28.4131;
    cupsValue = millilitersValue / 240;
    document.getElementById("teaspoonsInput").value = teaspoonsValue.toFixed(2);
    document.getElementById("tablespoonsInput").value = tablespoonsValue.toFixed(2);
    document.getElementById("ouncesInput").value = ouncesValue.toFixed(2);
    document.getElementById("cupsInput").value = cupsValue.toFixed(2);        
});

teaspoonsField.addEventListener("input", function() {
    teaspoonsValue = parseFloat(document.getElementById("teaspoonsInput").value);
    millilitersValue = teaspoonsValue * 5;
    tablespoonsValue = teaspoonsValue / 3;
    ouncesValue = teaspoonsValue / 5.76456;
    cupsValue = teaspoonsValue / 48.6922;
    document.getElementById("millilitersInput").value = millilitersValue.toFixed(2);
    document.getElementById("tablespoonsInput").value = tablespoonsValue.toFixed(2);
    document.getElementById("ouncesInput").value = ouncesValue.toFixed(2);
    document.getElementById("cupsInput").value = cupsValue.toFixed(2);    
});

tablespoonsField.addEventListener("input", function() {
    tablespoonsValue = parseFloat(document.getElementById("tablespoonsInput").value);
    millilitersValue = tablespoonsValue * 15;
    teaspoonsValue = tablespoonsValue * 3;
    ouncesValue = tablespoonsValue / 1.92152;
    cupsValue = tablespoonsValue / 16.2307;
    document.getElementById("millilitersInput").value = millilitersValue.toFixed(2);
    document.getElementById("teaspoonsInput").value = teaspoonsValue.toFixed(2);
    document.getElementById("ouncesInput").value = ouncesValue.toFixed(2);
    document.getElementById("cupsInput").value = cupsValue.toFixed(2);
});

ouncesField.addEventListener("input", function() {
    ouncesValue = parseFloat(document.getElementById("ouncesInput").value);
    millilitersValue = ouncesValue * 28.4131;
    teaspoonsValue = ouncesValue * 5.76456;
    tablespoonsValue = ouncesValue * 1.92152;
    cupsValue = ouncesValue / 8.11537;
    document.getElementById("millilitersInput").value = millilitersValue.toFixed(2);
    document.getElementById("teaspoonsInput").value = teaspoonsValue.toFixed(2);
    document.getElementById("tablespoonsInput").value = tablespoonsValue.toFixed(2);
    document.getElementById("cupsInput").value = cupsValue.toFixed(2);
});

cupsField.addEventListener("input", function() {
    cupsValue = parseFloat(document.getElementById("cupsInput").value);
    millilitersValue = cupsValue * 240;
    teaspoonsValue = cupsValue * 48.6922;
    tablespoonsValue = cupsValue * 16.2307;
    ouncesValue = cupsValue * 8.11537;
    document.getElementById("millilitersInput").value = millilitersValue.toFixed(2);
    document.getElementById("teaspoonsInput").value = teaspoonsValue.toFixed(2);
    document.getElementById("tablespoonsInput").value = tablespoonsValue.toFixed(2);
    document.getElementById("ouncesInput").value = ouncesValue.toFixed(2);
});

resetVolume.addEventListener("click", function() {
    document.getElementById("millilitersInput").value = "";
    document.getElementById("teaspoonsInput").value = "";
    document.getElementById("tablespoonsInput").value = "";
    document.getElementById("ouncesInput").value = "";
    document.getElementById("cupsInput").value = "";
});