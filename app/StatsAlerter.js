const EmailAlert= require("./EmailAlert");
const LEDAlert= require("./LEDAlert");
const getStatistics= require("../app/statistics");

module.exports = function (maxThreshold,alerters) {
    this.maxThreshold = maxThreshold;   
    this.emailAlert= alerters[0];
    this.ledAlert= alerters[1];  

    this.checkAndAlert= function(numbers){
        const stats=getStatistics(numbers);      
        if(stats.max > this.maxThreshold){          
             this.emailAlert.emailSent = true;
             this.ledAlert.ledGlows = true;
        }
    }
}