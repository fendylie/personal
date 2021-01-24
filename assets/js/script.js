function getId(id) {
    return document.getElementById(id);
}

let preload = () => {
    const blocks = document.querySelectorAll(".preloader .blocks .block");

    let interval = 0;
    blocks.forEach((block, i) => {
        setTimeout(() => {
            animate(block, i);
        }, interval);
        interval += 500;
    });

    function animate(block, index) {
        let position = index;
        setInterval(() => {
            switch (position) {
                case 0:
                    block.style.top = "40px";
                    position = 3;
                    break;
                case 1:
                    block.style.left = "40px";
                    position = 0;
                    break;
                case 2:
                    block.style.top = "0px";
                    position = 1;
                    break;
                case 3:
                    block.style.left = "0px";
                    position = 2;
                    break;
            }
        }, 1500);
    }

    const preloaderText = document.querySelector(".preloader .preloader-text");
    let dots = 1;
    setInterval(() => {
        switch (dots) {
            case 1:
                preloaderText.textContent = "Loading...";
                dots++;
                break;
            case 2:
                preloaderText.textContent = "Loading..";
                dots++;
                break;
            case 3:
                preloaderText.textContent = "Loading.";
                dots++;
                break;
            case 4:
                preloaderText.textContent = "Loading";
                dots++;
                break;
            case 5:
                preloaderText.textContent = "Loading.";
                dots++;
                break;
            case 6:
                preloaderText.textContent = "Loading..";
                dots++;
                break;
            case 7:
                preloaderText.textContent = "Loading...";
                dots = 1;
                break;
        }
    }, 500);
};

preload();

const preloader = document.querySelector(".preloader");
const navbar = getId("navbar");
const about = getId("about");
const projects = getId("projects");
const contact = getId("contact");
navbar.style.opacity = "0";
about.style.display = "none";
projects.style.display = "none";
contact.style.display = "none";
function finishLoading() {
    preloader.style.opacity = "0";
    setTimeout(() => {
        navbar.style.opacity = "1";
        preloader.style.display = "none";
        about.style.display = "block";
        projects.style.display = "block";
        contact.style.display = "block";
    }, 500);
}

window.onload = function () {
    setTimeout(() => {
        finishLoading();
    }, 2000);
};

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sendEmail() {
    var sendMsg = getId("sending");
    let interval = 1;
    setInterval(() => {
        switch (interval) {
            case 1:
                sendMsg.textContent = "Sending.";
                interval++;
                break;
            case 2:
                sendMsg.textContent = "Sending..";
                interval++;
                break;
            case 3:
                sendMsg.textContent = "Sending...";
                interval++;
                break;
            case 4:
                sendMsg.textContent = "Sending..";
                interval++;
                break;
            case 5:
                sendMsg.textContent = "Sending.";
                interval++;
                break;
            case 6:
                sendMsg.textContent = "Sending";
                interval = 1;
                break;
        }
    }, 600);
}

var i = 0;
function submitBtn() {
    var inputName = getId("input-name"),
        inputEmail = getId("input-email"),
        inputSub = getId("input-subject"),
        inputMsg = getId("input-message");

    var st1 = inputName.value === "" || inputEmail.value === "",
        st2 = inputSub.value === "",
        st3 = inputMsg.value === "";

    if (st1 && i === 0) {
        inputName.classList.add("shake");
        inputEmail.classList.add("shake");
        setTimeout(() => {
            inputName.classList.remove("shake");
            inputEmail.classList.remove("shake");
        }, 1000);
    } else if (st2 && i === 1) {
        inputSub.classList.add("shake");
        setTimeout(() => {
            inputSub.classList.remove("shake");
        }, 1000);
    } else if (st3 && i === 2) {
        inputMsg.classList.add("shake");
        setTimeout(() => {
            inputMsg.classList.remove("shake");
        }, 1000);
    } else {
        if (i < 4) {
            if (i == 0) {
                if (emailIsValid(inputEmail.value) == false) {
                    inputEmail.classList.add("shake");
                    setTimeout(() => {
                        inputEmail.classList.remove("shake");
                    }, 1000);
                } else {
                    var next = document.querySelectorAll(".main-form div");
                    i++;
                    next[i - 1].style.display = "none";
                    next[i].style.display = "block";
                }
            } else {
                var next = document.querySelectorAll(".main-form div");
                i++;
                if (i == 3) {
                    sendEmail();
                    setTimeout(() => {
                        i = 4;
                        next[i - 1].style.display = "none";
                        next[i].style.display = "block";
                    }, 5600);
                }
                next[i - 1].style.display = "none";
                next[i].style.display = "block";
            }
        }
    }
}
