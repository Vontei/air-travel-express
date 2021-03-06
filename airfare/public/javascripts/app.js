module.exports = {

  airfareTotal: function(departure,arrival, bags, wifi, pickClass, discountCode) {
    var upgradeTotal = 0;
    var bagTotal = 0;
    var classTotal = 0;
    var wifiTotal = 0;
    var discountTotal = 0;
    var discount10 = '10OFF';
    var discount20 = '20OFF';
    var classChoice = 0;
    var airPrice = 0;
    //////////////////////////////Departures and Arrivals
    if (departure === arrival) {
        airPrice= 0;
        bags = 0;
        classChoice = 0;

    } else if (((departure==='NY') || (arrival === 'NY')) && ((departure==="CHI") || (arrival === "CHI"))) {
          airPrice  = 250;
    } else if (((departure==='NY') || (arrival === 'NY')) && ((departure=="LA") || (arrival == "LA"))) {
        airPrice = 545;
    } else if (((departure==='CHI') || (arrival === 'CHI')) && ((departure=="LA") || (arrival == "LA"))) {
        airPrice = 350;
    }

    /////////////////////////////Check Bags
    if (bags === 0) {
          bagTotal = 0;
    } else {
         bagTotal = bags * 25;
    }


    ////////////////////////////Add Class
    if (pickClass === 0) {
      upgradeTotal = 0;
    } else if (pickClass == 200) {
      upgradeTotal = 200;
    } else if (pickClass == 500) {
        upgradeTotal = 500;
    }


    ////////////////////////////Add Wifi
    if (departure === arrival) {
        wifiTotal=0;
    } else if (wifi) {
       wifiTotal = 12;
    } else {
       wifiTotal = 0;
    }

    ////////////////////////////Discount

    if (discountCode === discount10) {
      discountTotal = .10;
    } else if (discountCode === discount20) {
      discountTotal = .20;
    } else {
      discountTotal = 0;
    }

    var discountedAirfare = airPrice - (airPrice*discountTotal);
    var airfare = discountedAirfare + bagTotal + upgradeTotal + wifiTotal;
    return airfare;
  }

}
