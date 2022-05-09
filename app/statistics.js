module.exports=function getStatistics(numbers){
    //implement the computation of statistics here
    var total = 0;  
    let statsObj = {};
    statsObj.min = Math.min(...numbers);  
    statsObj.max = Math.max(...numbers);
    for(var i = 0; i < numbers.length; i++)
    {
        total += numbers[i];
    }
    statsObj.average = total / numbers.length;   
    return statsObj;   
}

