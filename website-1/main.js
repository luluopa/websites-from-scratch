const spanCopyrightYear = document.getElementById("data-rights");

function changeYear() {
    if (spanCopyrightYear.innerText === "X") {
        spanCopyrightYear.innerText = new Date().getFullYear();
    }
}

changeYear();