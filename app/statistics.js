module.exports=function getStatistics(numbers){
    //implement the computation of statistics here
    var total = 0;  
    let statsObj = {};
    // statsObj.min = Math.min(...numbers);  
    // statsObj.max = Math.max(...numbers);
    statsObj.min = minimumFn(numbers);  
    statsObj.max = maximumFn(numbers);
    for(var i = 0; i < numbers.length; i++)
    {
        total += numbers[i];
    }
    statsObj.average = total / numbers.length;   
    return statsObj;   

    function minimumFn(numbers){
        var arrayLen = numbers.length;
        minimum = numbers[arrayLen-1];
        while (arrayLen--){
            if(numbers[arrayLen] < minimum){
                minimum = numbers[arrayLen]
            }
        }
        return minimum;
    };    

    function maximumFn(numbers){
        var arrayLen = numbers.length;
        maximum = numbers[arrayLen-1];
        while (arrayLen--){
            if(numbers[arrayLen] > maximum){
                maximum = numbers[arrayLen]
            }
        }
        return maximum;
    };
}

