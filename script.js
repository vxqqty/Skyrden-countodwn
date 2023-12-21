function updateCountdown() {
    const currentDate = new Date();
    const christmasDate = new Date('2023-12-25'); // Replace with your desired Christmas date
  
    const diffTime = christmasDate.getTime() - currentDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    document.getElementById('countdown').innerText = diffDays;
  }
  
  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  
  // Initial call to display countdown immediately
  updateCountdown();