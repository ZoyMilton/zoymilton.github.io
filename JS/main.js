//https://amg01602-themahqfrance-vivekanald-canelatv-oionv.amagi.tv/playlist/amg01602-themahqfrance-vivekanald-canelatv/cb563e1e7b6c6d8984c33d78d9f262c0a65928d80b6c852a6ab454876da64607d1e3b680fd358b785d9f01de6a1a0a080361cf12ce3407c3d56aea173e7d17728498ab6baecc4152edc70d2a2bb37a1f51ff1e6389670674d6f15559d56bfb294757ee5e6b0134dded5db070509780178a7e7cdfb08f663e2e4756ce0c0cb4a65ca6f6b30f41d2469b904d1cd63111b2c41b9a8173e3d58d0cc607a443cb279a90f081ed2ab5d7c520b71eed367b3b481cc9da0df9a348a5e58a7b308a702b5f6c338cc7c2e74071dc052932f9fbd8f164ef03f18b308f643bbe72e825ea338566e40aa6ef4bacacf5d0565563cbae336023b3aba78eeb2741de0c9af2b3a7190c98f2073643cc7bd1212e0787f4cf008cb173fcd272d7ec394743aae2449f8efc87eaa68449991ac6c6fa9f284349667666ec3fa78937a343b379acdd5d344f7254bf9343c585c02c56082bd79950994968d3b78c87cf1c04c96f1549ed6ecd296606ad6536078f40f89e2f229a2f1e800a33fa5530f22896d02ff4a9dee9072fa384b728966eeba644d1f912b96c4e3a68d2a276282f3c7cd4fd280a3469d17ae7dcc4f27207149e94a79f9109496d5316561fc5ebf44f978fd45b7e7ca0037c0b1e74109214c41bbc6a285074e174bead0d67cb152839e3982f5c5d69e49fdbd48fc2de54a63a80ceb86b297e0b65aa2412686dd2b88855fc765f683f0f864a3745ae025956e39ac7a0ca846dcf9265a63d711173c2aa6a2b63537770449c9566d35bf0e172d3f6c453d8d09e02408635a508159a8a880689ec85d4010e80ba680a7398c122fa663fcb65ab41f5da64cca0465c5373575fd5c057fe51bcd39b893f8c63a94a1577e97da8c6b0d9bb6752f4df4e3625005612405b725e4ed29a85305023e8ec76b45fb7ed05aa47566067178ed7055dd1e92e4ec8672938f1f3f963cca071785bb67b14b3022189156a0ceec031fc8ab38182ed0d6721a9782fd1d9dbe5b2c3c3de2e3e2a613589c85c540db54e650d8980df7b50eec9bbe4c02cd71d76b435e5c44fc846d6efb91eaf8289fff672194a5517f8c4b7d6159b8c0b5ff11b8908458cfffb0ae17480b75c57d89380d2734680c70fde17a78af601da22bbe77606e6b85958cf4ec2a08acf0b13d22dab2c3332a483d12e73f8ca0197428c86b72178cc594eaa1705219b75f4d1eb322ff9ea475b11ff1d5ddd27d28689151955ab916d2a655f5c445981110c7da41863b71fb4ebfafe3970d84fda7d4ad51398cb59a3ad1bfdb395a3dc821651e7a65c58a275a261de0ec1c386f434a529108c61831f64a9c79cb388dbceb9cbd009495af1609e1ac36295d6abe10760601e8f163507529a77a25b7b32c5ce369bfe15a604a087fd8e982e3ff780052f4a9877/198/1280x720_3343260/index.m3u8
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

// Grab DOM elements
const video = document.querySelector(".video");
const playButton = document.querySelector(".play");
const playButtonIcon = playButton.querySelector("i");
const stopButton = document.querySelector(".stop");
const progressBar = document.querySelector(".progress")
const timestamp = document.querySelector(".timestamp")

// Listen for events
video.addEventListener("click", playPauseVideo);
progressBar.addEventListener("change", setVideoProgress)
playButton.addEventListener("click", playPauseVideo);
stopButton.addEventListener("click", stopVideo);
video.addEventListener("timeupdate", updateVideoProgress)

// Utility functions
function playPauseVideo() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
    video[video.paused ? "play" : "pause"]()
    playButtonToggleIcon()
}

function playButtonToggleIcon() {
    if (video.paused) {
        playButtonIcon.classList.remove("fa-pause")
        playButtonIcon.classList.add("fa-play")
    } else {
        playButtonIcon.classList.remove("fa-play")
        playButtonIcon.classList.add("fa-pause")
    }
}

function stopVideo() {
    video.pause()
    video.currentTime = 0
    playButtonToggleIcon()
    progressBar.value = 0
}

function setVideoProgress() {
    video.currentTime = Number((progressBar.value * video.duration) / 100)
}

function updateVideoProgress() {
    progressBar.value = Number((video.currentTime / video.duration) * 100)
    let minutes = Math.floor(video.currentTime / 60)    
    let seconds = Math.floor(video.currentTime % 60)
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    timestamp.textContent = `${minutes}:${seconds}`
}
