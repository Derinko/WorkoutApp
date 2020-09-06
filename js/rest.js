document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector("#start")
    let timeleft = 3;

    function countDown() {
        setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(timeleft = 0)
                var audio = new Audio('time.mp3');
                
                setTimeout(function(){
                    audio.play();
                
                    setTimeout(function(){
                        audio.pause();
                        audio.currentTime = 0;
                    }, 2000);
                }, 1000);
            }
            timeLeftDisplay.textContent = "00:" + timeleft;
            timeleft -= 1;
        }, 1000)
    }
    startBtn.addEventListener("click", countDown);
})