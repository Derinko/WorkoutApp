document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector("#start")
    let timeleft = 60;

    function countDown() {
        setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(timeleft = 0)
                document.getElementById('audio').play();
            }
            timeLeftDisplay.textContent = "00:"+ timeleft;
            timeleft -=1;
        }, 1000)
    }
    startBtn.addEventListener("click", countDown);
})