class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;// ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);// ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime * 60);// ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
