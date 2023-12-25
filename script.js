// JavaScript for countdown
const countdownElement = document.getElementById('countdown');
const proposalButton = document.getElementById('proposalButton');

// Set the date of your proposal
const proposalDate = new Date('December 25, 2023 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = proposalDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance <= 0) {
        countdownElement.innerHTML = 'It\'s Time!';
        proposalButton.style.display = 'block';
    }
}

// Update the countdown every 1 second
setInterval(updateCountdown, 1000);
