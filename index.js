// getting HTML elements
var emoChrome = document.getElementById("iframeAudio")
var emoOther = document.getElementById("playAudio")
var emoGothChicks = document.getElementById("otherGothChicks")
// ---------------------

// picking a random song from the songs folder
var emoPlaylist = ["songs/21-guns.mp3", "songs/black-parade.mp3", "songs/bring-me-to-life.mp3", "songs/crawling.mp3", "songs/i-am-all-of-me.mp3", "songs/in-the-end.mp3", "songs/miss-you.mp3", "songs/numb.mp3"]
var nowPlaying = emoPlaylist[Math.floor(Math.random()*emoPlaylist.length)]
// -------------------------------------------

// this is to see if you are on google or chrome
var onChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// ---------------------------------------------

// this is just to make sure that it will not have double audio in the background
if (!onChrome){
    emoChrome.remove()
    emoGothChicks.src = nowPlaying
}
else {
    emoOther.remove()
    emoChrome.src = nowPlaying
}
// ------------------------------------------------------------------------------