function calculateTime() {
  const birthdayInput = document.getElementById("birthday").value;
  let birthdayDate = new Date(birthdayInput);
  const currentDate = new Date();

  if (isNaN(birthdayDate.getTime())) {
    alert("Please enter a valid date.");
    return;
  }

  // Check if the birthday has occurred this year
  if (birthdayDate < currentDate) {
    // If yes, set the birthday to next year
    birthdayDate.setFullYear(currentDate.getFullYear() + 1);
  }

  // Calculate initial time difference
  let timeDifference = birthdayDate - currentDate;

  function updateCountdown() {
    // Recalculate time difference
    timeDifference = birthdayDate - new Date();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display countdown
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `Time left until your birthday:<br>${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  // Call updateCountdown every second
  setInterval(updateCountdown, 1000);

  // Call it once immediately to display initial countdown
  updateCountdown();
}
