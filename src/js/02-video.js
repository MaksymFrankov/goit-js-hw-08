import Player from "@vimeo/player"
import throttle from "lodash.throttle";
 
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const playerData = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(playerData.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    console.error(error)
});

player.on('timeupdate', throttle(data => localStorage.setItem("videoplayer-current-time", JSON.stringify(data)), 1000));

