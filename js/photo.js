document.getElementById("showCodeBox").addEventListener("click", function() {
    document.getElementById("codeBox").style.display = "block";
    document.getElementById("accessCode").focus();
});

function getConfiguredCode() {
    // Priority: window.ACCESS_CODE (configured via js/config.js) -> meta tag -> null
    if (typeof window !== 'undefined' && window.ACCESS_CODE) {
        return String(window.ACCESS_CODE);
    }

    const meta = document.querySelector('meta[name="access-code"]');
    if (meta && meta.content) {
        return String(meta.content);
    }

    return null;
}

function showError(message) {
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.textContent = message;
    errorMsg.style.display = "block";
}

function checkCode() {
    const correctCode = getConfiguredCode();
    const enteredCode = document.getElementById("accessCode").value.trim();

    if (!correctCode) {
        showError('⚠️ Access code not configured. Ask the site admin to add `js/config.js` or a meta tag.');
        return;
    }

    if (enteredCode === correctCode) {
        window.location.href = "https://photos.app.goo.gl/mN7GRRVrmXyqjpDY9";
    } else {
        showError('❌ Incorrect code, please try again!');
    }
}

document.getElementById("submitCode").addEventListener("click", checkCode);

document.getElementById("accessCode").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkCode();
    }
});
