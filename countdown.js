// Set the date we're counting down to
const countdownDate = new Date("January 1, 2030 00:00:00").getTime();

// Update the countdown every 1 second
const interval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const remainingTime = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the results in respective elements
    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("seconds").innerHTML = seconds + "s";

    // If the countdown finishes
    if (remainingTime < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
