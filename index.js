// picking a random song from the songs folder
var emoPlaylist = ["songs/21-guns.mp3", "songs/black-parade.mp3", "songs/bring-me-to-life.mp3", "songs/crawling.mp3", "songs/i-am-all-of-me.mp3", "songs/in-the-end.mp3", "songs/miss-you.mp3", "songs/numb.mp3"]
var nowPlaying = emoPlaylist[Math.floor(Math.random()*emoPlaylist.length)]
var counter = 0
// -------------------------------------------

function audioCue() {
    if (counter !== 1) {    
        var audio = new Audio(nowPlaying);
        audio.autoplay = true
        audio.loop = true
        counter++
        audio.play();
    }
}

// document.addEventListener("click", audioCue)
audioCue()
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (isMobile.any() !== null) {
    alert("This website will not play audio on most mobile devices, please open this on an laptop or bigger device for audio.")
}