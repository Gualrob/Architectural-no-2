function unlockTour() {
  const today = new Date().toISOString().split('T')[0];
  localStorage.setItem('tourUnlocked', today);
  alert("Tour unlocked for today!");
}
