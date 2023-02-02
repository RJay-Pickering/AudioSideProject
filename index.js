// picking a random song from the songs folder
var emoPlaylist = ["songs/21-guns.mp3", "songs/black-parade.mp3", "songs/bring-me-to-life.mp3", "songs/crawling.mp3", "songs/i-am-all-of-me.mp3", "songs/in-the-end.mp3", "songs/miss-you.mp3", "songs/numb.mp3"]
var nowPlaying = emoPlaylist[Math.floor(Math.random()*emoPlaylist.length)]
// -------------------------------------------

function audioCue() {
    var audio = new Audio(nowPlaying);
    audio.autoplay = true
    audio.loop = true
    audio.play();
}

document.addEventListener("click", audioCue)