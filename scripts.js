const countdownTimer = document.getElementById("countdown-timer");
const babyDueDate = new Date("April 20, 2023").getTime();

function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeLeft = babyDueDate - currentTime;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    if (timeLeft < 0) {
        clearInterval(updateInterval);
        countdownTimer.innerHTML = "Time to BLAZE IT! CONGRATULATIONS JOSH!";
    }
}

updateCountdown();
const updateInterval = setInterval(updateCountdown, 1000);
