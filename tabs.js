window.addEventListener("load", function () {
    var firstTabButton = document.querySelector(".tab");
    firstTabButton.click();
});

function openTab(event, tabName) {
    var i, tabContent, tab;
    tabContent = document.querySelectorAll(".tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.target.className += " active";
}