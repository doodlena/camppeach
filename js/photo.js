document.getElementById("showCodeBox").addEventListener("click", function() {
    document.getElementById("codeBox").style.display = "block";
    document.getElementById("accessCode").focus();
});

function checkCode() {
    // read correct code from runtime environment injected into the page
    // This must be provided via a runtime `config.js` (no local fallback) to keep
    // the code secret in the repository. If missing, fail closed and show a
    // console warning.
    if (!(window.__ENV__ && window.__ENV__.CORRECT_CODE)) {
        console.error('Missing runtime config: window.__ENV__.CORRECT_CODE is required');
        // show an unobtrusive message to the user
        const errorMsg = document.getElementById("errorMsg");
        if (errorMsg) {
            errorMsg.textContent = "Access code not configured.";
            errorMsg.style.display = "block";
        }
        return;
    }
    const correctCode = window.__ENV__.CORRECT_CODE;
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
