function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const baseDemeritPoints = 1;
  
    if (speed <= speedLimit) {
      console.log("Ok");
      return;
    }
  
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint) + baseDemeritPoints;
  
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  }
  calculateDemeritPoints(80);