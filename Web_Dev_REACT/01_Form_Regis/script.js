function sendOrVerifyOtp() {
    const otpButton = document.getElementById('otp-button');
    const otpInput = document.getElementById('otp-input');

    if (otpButton.innerText === "Send OTP") {
        otpInput.disabled = false;
        otpButton.innerText = "Verify OTP";

        alert("OTP sent to " + document.getElementById('mobile-input').value);
    } else if (otpButton.innerText === "Verify OTP") {
        otpButton.innerText = "Verified!";
        otpButton.classList.remove("btn-primary");
        otpButton.classList.add("btn-success");
        otpButton.disabled = true;
    }
}


function sendOrVerifyEmailOtp() {
    const otpButton = document.getElementById('email-otp-button');
    const otpInput = document.getElementById('email-otp-input');

    if (otpButton.innerText === "Send OTP") {
        otpInput.disabled = false;
        otpButton.innerText = "Verify OTP";
    
        alert("OTP sent to " + document.getElementById('email-input').value);
    } else if (otpButton.innerText === "Verify OTP") {
        otpButton.innerText = "Verified!";
        otpButton.classList.remove("btn-primary");
        otpButton.classList.add("btn-success");
        otpButton.disabled = true;
    }
}