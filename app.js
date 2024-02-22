let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("play-icon");
let isPlaying = false;

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        let isPlaying = false;
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        isPlaying = true;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
song.onplay = function() {
    isPlaying = true;
}

song.onpause = function() {
    isPlaying = false;
}

setInterval(() => {
    if (isPlaying) {
        progress.value = song.currentTime;
    }
}, 500);


progress.onchange = function() {
    song.play();
    isPlaying = true;
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
