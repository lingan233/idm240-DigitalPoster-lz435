// // $(document).ready(function(){
// //     // $( "#rocket-wrapper" ).on( "click", function( event ) {
// //     //     $(this).addClass('menu-btn-spin');
// //     // });
// //     $('#rocket-wrapper').click(function () {
// //         $(this).toggle('slide');
// //     });
// // });

// $(document).ready(function () {

//     $('#rocket-body').click(function () {
//         $('#rocket').addClass('slide');
//     });

//     // // click on menu items
//     // $(".slideout li").on("click", function () {
//     //     // remove the active class from all elements with active class
//     //     $('.active').removeClass('active')
//     //     // add active class to clicked element
//     //     $(this).addClass('active');
//     //     $('.content-txt').html($('.active').text() + ' PAGE');
//     // });
// });


// var rocketObj = document.getElementById("rocketObj");

// var rocketFlame;
// var rocketLine;
// var rocketTip;
// var rocketBody;
// var rocketAll;

// rocketObj.addEventListener("load", function () {
//     svgConDoc = rocketObj.contentDocument;

//     console.log(svgConDoc);
//     rocketFlame = svgConDoc.getElementById("rocket-flame");
//     rocketAll = svgConDoc.getElementById("rocketSvg");
//     rocketAll.addEventListener("click", function() {
//         changeColor(rocketFlame, "rgb(212, 50, 79)", "rgb(242, 234, 82)");
//     });
// });

// function changeColor(location, colorA, colorB) {
//     if (location.style.fill !== colorA) {
//         location.style.fill = colorA;
//         // alert("if");
//     } else {
//         location.style.fill = colorB;
//         // alert("else");
//     }
// }



// var coldplayObj = document.getElementById("coldplayObj");

// var coldplayAll;
// var coldplayLarge;

// rocketObj.addEventListener("load", function () {
//     svgConDoc = coldplayObj.contentDocument;
//     coldplayLarge = svgConDoc.getElementById("coldplay-large");
//     console.log(svgConDoc);
//     coldplayAll = svgConDoc.getElementById("coldplaySvg");
//     coldplayAll.addEventListener("click", function() {
//         changeColor(coldplayLarge, "rgb(106, 50, 159)", "rgb(8, 16, 41)");
//     });
// });



// hwk04 js code

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