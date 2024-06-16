function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.getElementById("sendOtp").addEventListener("click", () => {
    alert("OTP is mail");
    const email = document.getElementById("email").value;
    const OTP = Math.floor((Math.random() * 899999) + 100000);
    if (!validateEmail(email)) {
        alert("E-mail address is Invaild");
        return;
    }

    sendMail(OTP, email);
})

function sendMail(OTP, to) {
    (function () {
        emailjs.init("UarjFxJeA3W_1gsqM")  //public key
    })();

    let param = {
        subject: "Your OTP from reden",
        body: `Your OTP is : ${OTP}`,
        replayTo: "Chatter",
        to: `${to}`
    }

    var serviceID = "service_dz4v8dj";
    var templateID = "template_g7a83am";

    emailjs.send(serviceID, templateID, param)
        .then(
            (message) => {
                if (message.text == "OK") {
                    document.getElementById("loginButton").addEventListener("click", () => {
                        const enteredOtp = document.getElementById("otp").value;
                        console.log(`OTP : ${OTP}`)
                        console.log(`Entered OTP : ${enteredOtp}`)
                        if (OTP == parseInt(enteredOtp)) {
                            window.location.href = "https://google.com/search?q=Reden";
                        }
                        else {
                            alert("Invalid OTP");
                        }
                    })
                }
                else {
                    alert("Email is Invalid");
                }
            }
        );
}