document.getElementById("showCodeBox").addEventListener("click", function() {
    document.getElementById("codeBox").style.display = "block";
    document.getElementById("accessCode").focus();
});

function checkCode() {
    const correctCode = "PEACH2025";
    const enteredCode = document.getElementById("accessCode").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (enteredCode === correctCode) {
        window.location.href = "https://photos.app.goo.gl/mN7GRRVrmXyqjpDY9";
    } else {
        errorMsg.style.display = "block";
    }
}

document.getElementById("submitCode").addEventListener("click", checkCode);

document.getElementById("accessCode").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkCode();
    }
});
