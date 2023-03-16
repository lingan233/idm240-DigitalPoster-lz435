var rocketObj = document.getElementById("rocketObj");

rocketObj.addEventListener("load", function () {
    svgConDoc = rocketObj.contentDocument;

    console.log(svgConDoc);
    rocketFlame = svgConDoc.getElementById("rocketFlame");
    rocketSvg = svgConDoc.getElementById("rocketSvg");
    rocketSvg.addEventListener("click", function() {
        rocketObj.classList.add("slideBottomRight");
        changeColor(rocketFlame, "rgb(212, 50, 79)", "rgb(242, 234, 82)");
        setTimeout(function () {
            rocketObj.classList.remove("slideBottomRight");
            changeColor(rocketFlame, "rgb(212, 50, 79)", "rgb(242, 234, 82)");
        }, 1500);
    });
});

function changeColor(location, colorA, colorB) {
    if (location.style.fill !== colorA) {
        location.style.fill = colorA;
        // alert("if");
    } else {
        location.style.fill = colorB;
        // alert("else");
    }
}

const audioToggleBtn = document.getElementById('soundBtn');
const myAudio = document.getElementById('sound1');
var desktopRightContainer = document.getElementById("desktop-right-container");
var textContainer = document.getElementById("text-container");
var wrapper = document.getElementById("wrapper");

function handleResize() {
    if (window.innerWidth >= 1280) {
        desktopRightContainer.append(textContainer);
    } else {
        wrapper.prepend(textContainer);
    }
}

handleResize();

window.addEventListener("resize", handleResize);


let isAudioPlaying = false;
audioToggleBtn.addEventListener('click', function () {
    if (isAudioPlaying) {
        myAudio.pause();
        audioToggleBtn.style.backgroundImage = "url('./img/no-sound.svg')";
        isAudioPlaying = false;
    } else {
        myAudio.play();
        audioToggleBtn.style.backgroundImage = "url('./img/sound.svg')";
        isAudioPlaying = true;
    }
});