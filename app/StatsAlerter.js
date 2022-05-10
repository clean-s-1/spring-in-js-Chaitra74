const EmailAlert= require("./EmailAlert");
const LEDAlert= require("./LEDAlert");
const getStatistics= require("../app/statistics");

module.exports = function (maxThreshold,alerters) {
    this.maxThreshold = maxThreshold;   
   [this.emailAlert, this.ledAlert] = alerters;

    this.checkAndAlert= function(numbers){
        const stats=getStatistics(numbers);      
        if(stats.max > this.maxThreshold){          
             this.emailAlert.emailSent = true;
             this.ledAlert.ledGlows = true;
        }
    }
}
