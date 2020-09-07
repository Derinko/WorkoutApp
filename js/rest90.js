document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector("#unminmed")
    const pause= document.querySelector("body")
    let timeleft = 90;
    let audio = new Audio('timesup.mp3');

    function countDown() {
      let timer=  setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(timeleft = 0)

                setTimeout(function () {

                    audio.play();
                    clearInterval(timer);
                }, 1000)
            }
            timeLeftDisplay.textContent = timeleft;
            timeleft -= 1;
        }, 1000)
       
    }
    startBtn.addEventListener("click", countDown);
    function stopAudio(){

        audio.pause();
        audio.currentTime=0
        timeleft=90;
        timeLeftDisplay.textContent = "00:00"
    
    }
    pause.addEventListener("click",stopAudio)

    
})
